import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const itemSeq = resolvedParams.id;

    if (!itemSeq || itemSeq.trim() === '') {
      return NextResponse.json({
        success: false,
        error: {
          code: 'INVALID_ITEM_SEQ',
          message: '유효하지 않은 의약품 일련번호입니다.'
        }
      }, { status: 400 });
    }

    // 세션 확인 (선택적)
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // 해당 의약품의 리뷰 통계를 카테고리별로 집계
    const reviewStats = await prisma.medi_reviews.findMany({
      where: {
        medi_id: itemSeq
      },
      include: {
        review_types: {
          select: {
            id: true,
            review_text: true,
            emoji: true,
            category: true
          }
        }
      }
    });

    // 사용자별 리뷰 조회 (로그인한 경우)
    let userReviews: string[] = [];
    if (userId) {
      const userReviewData = await prisma.medi_reviews.findMany({
        where: {
          user_id: userId,
          medi_id: itemSeq
        },
        include: {
          review_types: {
            select: {
              review_text: true
            }
          }
        }
      });
      
      userReviews = userReviewData
        .map(review => review.review_types?.review_text)
        .filter((text): text is string => Boolean(text));
    }

    // 카테고리별로 그룹화하고 개수 집계
    const groupedStats: Record<string, Array<{
      id: number;
      emoji: string;
      text: string;
      count: number;
    }>> = {};

    // 각 리뷰 타입별 개수 집계
    const reviewTypeCounts: Record<number, number> = {};
    reviewStats.forEach((review) => {
      if (review.review_types) {
        const typeId = review.review_types.id;
        reviewTypeCounts[typeId] = (reviewTypeCounts[typeId] || 0) + 1;
      }
    });

    // 모든 활성화된 리뷰 타입을 가져와서 0개인 것도 포함
    const allReviewTypes = await prisma.review_types.findMany({
      where: {
        is_active: true
      },
      select: {
        id: true,
        review_text: true,
        emoji: true,
        category: true
      },
      orderBy: [
        { category: 'asc' },
        { id: 'asc' }
      ]
    });

    // 카테고리별로 그룹화
    allReviewTypes.forEach((reviewType) => {
      if (!reviewType.category || !reviewType.review_text || !reviewType.emoji) {
        return;
      }

      if (!groupedStats[reviewType.category]) {
        groupedStats[reviewType.category] = [];
      }

      groupedStats[reviewType.category].push({
        id: reviewType.id,
        emoji: reviewType.emoji,
        text: reviewType.review_text,
        count: reviewTypeCounts[reviewType.id] || 0
      });
    });

    // 총 리뷰 수와 참여자 수 계산
    const totalReviews = reviewStats.length;
    const uniqueUsers = new Set(reviewStats.map(review => review.user_id)).size;

    // 개발 환경에서는 캐시 비활성화, 프로덕션에서는 짧은 캐시
    const cacheControl = process.env.NODE_ENV === 'development' 
      ? 'no-cache, no-store, must-revalidate' 
      : 'public, max-age=60'; // 1분 캐시

    return NextResponse.json({
      success: true,
      data: {
        reviewStats: groupedStats,
        totalReviews,
        totalParticipants: uniqueUsers,
        userReviews
      }
    }, {
      status: 200,
      headers: {
        'Cache-Control': cacheControl
      }
    });

  } catch (error: any) {
    console.error('의약품 리뷰 통계 조회 오류:', error);

    return NextResponse.json({
      success: false,
      error: {
        code: 'MEDICINE_REVIEW_STATS_ERROR',
        message: '의약품 리뷰 통계를 불러오는 중 오류가 발생했습니다.'
      }
    }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 세션 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: '로그인이 필요합니다.'
        }
      }, { status: 401 });
    }

    const resolvedParams = await params;
    const itemSeq = resolvedParams.id;
    const body = await request.json();
    const { selectedOptions } = body;

    if (!itemSeq || itemSeq.trim() === '') {
      return NextResponse.json({
        success: false,
        error: {
          code: 'INVALID_ITEM_SEQ',
          message: '유효하지 않은 의약품 일련번호입니다.'
        }
      }, { status: 400 });
    }

    if (!selectedOptions || !Array.isArray(selectedOptions)) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'INVALID_OPTIONS',
          message: '선택된 리뷰 옵션이 올바르지 않습니다.'
        }
      }, { status: 400 });
    }

    // 최대 선택 개수 제한 (예: 5개)
    if (selectedOptions.length > 5) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'TOO_MANY_OPTIONS',
          message: '최대 5개까지만 선택할 수 있습니다.'
        }
      }, { status: 400 });
    }

    const userId = session.user.id;

    // 현재 사용자의 기존 리뷰 조회
    const existingReviews = await prisma.medi_reviews.findMany({
      where: {
        user_id: userId,
        medi_id: itemSeq
      },
      include: {
        review_types: {
          select: {
            review_text: true
          }
        }
      }
    });

    const existingOptions = existingReviews.map(review => review.review_types?.review_text).filter(Boolean);

    // 선택된 옵션에 해당하는 리뷰 타입 ID 조회
    const reviewTypes = await prisma.review_types.findMany({
      where: {
        review_text: {
          in: selectedOptions
        },
        is_active: true
      },
      select: {
        id: true,
        review_text: true
      }
    });

    const reviewTypeMap = new Map(reviewTypes.map(rt => [rt.review_text, rt.id]));

    // 추가할 옵션과 제거할 옵션 구분
    const toAdd = selectedOptions.filter(option => !existingOptions.includes(option));
    const toRemove = existingOptions.filter(option => !selectedOptions.includes(option));

    let addedCount = 0;
    let removedCount = 0;

    // 트랜잭션으로 처리
    await prisma.$transaction(async (tx) => {
      // 제거할 리뷰들
      if (toRemove.length > 0) {
        const removeTypeIds = toRemove.map(option => reviewTypeMap.get(option)).filter((id): id is number => id !== undefined);
        if (removeTypeIds.length > 0) {
          const deleteResult = await tx.medi_reviews.deleteMany({
            where: {
              user_id: userId,
              medi_id: itemSeq,
              review_type_id: {
                in: removeTypeIds
              }
            }
          });
          removedCount = deleteResult.count;
        }
      }

      // 추가할 리뷰들
      if (toAdd.length > 0) {
        const addData = toAdd
          .map(option => {
            const typeId = reviewTypeMap.get(option);
            return typeId ? {
              user_id: userId,
              medi_id: itemSeq,
              review_type_id: typeId
            } : null;
          })
          .filter((item): item is { user_id: string; medi_id: string; review_type_id: number } => item !== null);

        if (addData.length > 0) {
          await tx.medi_reviews.createMany({
            data: addData
          });
          addedCount = addData.length;
        }
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        message: '리뷰가 성공적으로 업데이트되었습니다.',
        addedCount,
        removedCount,
        totalSelected: selectedOptions.length
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error('리뷰 등록 오류:', error);

    return NextResponse.json({
      success: false,
      error: {
        code: 'REVIEW_SUBMIT_ERROR',
        message: '리뷰 등록 중 오류가 발생했습니다.'
      }
    }, { status: 500 });
  }
} 