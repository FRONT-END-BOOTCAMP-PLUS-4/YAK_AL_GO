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
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
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