// 의약품 상세 정보 조회 API

import { NextRequest, NextResponse } from 'next/server';
import { MediDetailUsecase } from '@/backend/application/usecases/medicines/MediDetailUsecase';
import { PrismaMediRepository } from '@/backend/infra/repositories/prisma/PrismaMediRepository';
import prisma from '@/lib/prisma';

/**
 * 의약품 상세 정보 조회
 * GET /api/medicines/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // URL 파라미터에서 의약품 ID 추출
    const itemSeq = params.id;

    if (!itemSeq) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MISSING_ITEM_SEQ',
            message: '의약품 일련번호가 필요합니다.',
          },
        },
        { status: 400 }
      );
    }

    // Repository와 UseCase 초기화
    const mediRepository = new PrismaMediRepository(prisma as any);
    const mediDetailUsecase = new MediDetailUsecase(mediRepository);

    // UseCase를 통해 의약품 상세 정보 조회 (PDF 파싱 포함)
    const result = await mediDetailUsecase.getMedicineDetail({ itemSeq });

    // 결과에 따른 응답 처리
    if (!result.success) {
      const statusCode = result.error?.code === 'MEDICINE_NOT_FOUND' ? 404 : 400;
      return NextResponse.json(result, { status: statusCode });
    }

    // 성공 응답
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600', // 1시간 캐시
      },
    });

  } catch (error) {
    console.error('의약품 상세 API 오류:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: '서버 내부 오류가 발생했습니다.',
        },
      },
      { status: 500 }
    );
  }
}

/**
 * 의약품 상세 정보 헬스체크
 * HEAD /api/medicines/[id]
 */
export async function HEAD(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemSeq = params.id;

    if (!itemSeq) {
      return new NextResponse(null, { status: 400 });
    }

    const mediRepository = new PrismaMediRepository(prisma as any);
    const mediDetailUsecase = new MediDetailUsecase(mediRepository);

    const result = await mediDetailUsecase.getMedicineDetail({ itemSeq });

    if (!result.success) {
      const statusCode = result.error?.code === 'MEDICINE_NOT_FOUND' ? 404 : 400;
      return new NextResponse(null, { status: statusCode });
    }

    return new NextResponse(null, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error) {
    console.error('의약품 상세 헬스체크 오류:', error);
    return new NextResponse(null, { status: 500 });
  }
}
