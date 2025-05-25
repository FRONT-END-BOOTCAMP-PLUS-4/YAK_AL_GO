import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/prisma/generated/index';
import { MedicineDataService } from '@/backend/infra/external/publicData/medicineDataService';

const prisma = new PrismaClient();

/**
 * GET /api/medicines
 * 저장된 의약품 데이터 조회 (페이지네이션, 검색 지원)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get('page') || '1');
    const limit = Math.min(Number.parseInt(searchParams.get('limit') || '10'), 100);
    const search = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    // 검색 조건 구성
    const whereCondition = search
      ? {
          OR: [
            { item_name: { contains: search, mode: 'insensitive' as const } },
            { entp_name: { contains: search, mode: 'insensitive' as const } },
            { material_name: { contains: search, mode: 'insensitive' as const } },
          ],
        }
      : {};

    // 총 개수 조회
    const totalCount = await prisma.medicines.count({
      where: whereCondition,
    });

    // 데이터 조회
    const medicines = await prisma.medicines.findMany({
      where: whereCondition,
      skip,
      take: limit,
      orderBy: {
        updated_at: 'desc',
      },
      select: {
        item_seq: true,
        item_name: true,
        entp_name: true,
        item_permit_date: true,
        etc_otc_code: true,
        material_name: true,
        storage_method: true,
        valid_term: true,
        updated_at: true,
      },
    });

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: {
        medicines,
        pagination: {
          currentPage: page,
          totalPages,
          totalCount,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error('의약품 데이터 조회 오류:', error);
    return NextResponse.json(
      {
        success: false,
        error: '의약품 데이터 조회 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/medicines
 * DUR 품목정보 동기화 실행
 * ?mode=full : 전체 동기화
 * ?mode=test : 테스트 동기화 (기본값)
 */
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('mode') || 'test'; // 기본값은 테스트 모드

    const apiKey = process.env.PUBLIC_DATA_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'API 키가 설정되지 않았습니다. 환경변수를 확인해주세요.',
        },
        { status: 500 }
      );
    }

    console.log(`🚀 DUR 의약품 데이터 동기화 요청 시작... (모드: ${mode})`);
    console.log(`🔑 API 키 길이: ${apiKey.length}자`);
    console.log(`🔑 API 키 앞부분: ${apiKey.substring(0, 20)}...`);
    console.log(`🔑 API 키 뒷부분: ...${apiKey.slice(-10)}`);

    // 즉시 실행하여 오류 확인
    const medicineService = new MedicineDataService(apiKey);

    try {
      let result: {
        success: boolean;
        totalProcessed: number;
        message: string;
      };

      if (mode === 'full') {
        // 전체 데이터 동기화
        console.log('🌍 전체 데이터 동기화 시작...');
        console.log('⚠️  주의: 전체 동기화는 시간이 오래 걸릴 수 있습니다.');
        result = await medicineService.syncAllMedicineData();
      } else {
        // 소량 테스트 실행
        console.log('🧪 소량 테스트 데이터 동기화 시작...');
        result = await medicineService.syncLimitedMedicineData(1, 10); // 1페이지, 10건만
      }

      await medicineService.disconnect();

      const message =
        mode === 'full'
          ? '전체 데이터 동기화가 완료되었습니다.'
          : '소량 테스트 동기화가 완료되었습니다.';

      return NextResponse.json({
        success: true,
        message,
        result,
      });
    } catch (syncError) {
      console.error('❌ 동기화 실행 오류:', syncError);
      await medicineService.disconnect();

      return NextResponse.json(
        {
          success: false,
          error: `동기화 실행 실패: ${syncError instanceof Error ? syncError.message : '알 수 없는 오류'}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('의약품 데이터 동기화 시작 오류:', error);
    return NextResponse.json(
      {
        success: false,
        error: '의약품 데이터 동기화 시작 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
