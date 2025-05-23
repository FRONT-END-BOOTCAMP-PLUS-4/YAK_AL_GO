import { NextResponse } from 'next/server';
import { MedicineDataService } from '@/backend/infra/external/publicData/medicineDataService';

export async function GET() {
  try {
    console.log('타이레놀 데이터 조회 API 요청 시작');

    const medicineService = new MedicineDataService();

    // 타이레놀 약품 데이터만 가져와서 DB에 저장 (테스트용)
    const result = await medicineService.fetchAndSaveMedicine('타이레놀');

    console.log('타이레놀 데이터 조회 및 저장 완료');

    return NextResponse.json({
      success: true,
      message: `'타이레놀' 데이터 조회 및 저장 완료`,
      data: result,
    });
  } catch (error) {
    console.error('의약품 데이터 조회 중 오류 발생:', error);

    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('상세 오류 정보:', { message: errorMessage, stack: errorStack });

    return NextResponse.json(
      {
        success: false,
        message: '의약품 데이터 조회 중 오류가 발생했습니다.',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
