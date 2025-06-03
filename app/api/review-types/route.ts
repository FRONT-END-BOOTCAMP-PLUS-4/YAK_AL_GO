import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/prisma/generated';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // 활성화된 리뷰 타입들을 카테고리별로 조회
    const reviewTypes = await prisma.review_types.findMany({
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
    const groupedReviewTypes: Record<string, Array<{
      id: number;
      emoji: string;
      text: string;
      category: string;
    }>> = {};

    reviewTypes.forEach((reviewType) => {
      if (!reviewType.category || !reviewType.review_text || !reviewType.emoji) {
        return; // null 값들은 스킵
      }

      if (!groupedReviewTypes[reviewType.category]) {
        groupedReviewTypes[reviewType.category] = [];
      }

      groupedReviewTypes[reviewType.category].push({
        id: reviewType.id,
        emoji: reviewType.emoji,
        text: reviewType.review_text,
        category: reviewType.category
      });
    });

    // 개발 환경에서는 캐시 비활성화
    const cacheControl = process.env.NODE_ENV === 'development' 
      ? 'no-cache, no-store, must-revalidate' 
      : 'public, max-age=3600'; // 1시간 캐시

    return NextResponse.json({
      success: true,
      data: groupedReviewTypes
    }, {
      status: 200,
      headers: {
        'Cache-Control': cacheControl
      }
    });

  } catch (error: any) {
    console.error('리뷰 타입 조회 오류:', error);

    return NextResponse.json({
      success: false,
      error: {
        code: 'REVIEW_TYPES_FETCH_ERROR',
        message: '리뷰 타입을 불러오는 중 오류가 발생했습니다.'
      }
    }, {
      status: 500
    });
  } finally {
    await prisma.$disconnect();
  }
} 