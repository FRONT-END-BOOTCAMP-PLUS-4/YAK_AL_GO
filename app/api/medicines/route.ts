/**
 * 의약품 API 라우트 핸들러
 *
 * 이 파일은 의약품 데이터 관련 API 엔드포인트를 제공합니다:
 * - GET: 저장된 의약품 데이터 조회 (페이지네이션, 검색 지원)
 * - POST: 공공데이터포털 DUR 품목정보 동기화 실행
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/prisma/generated/index';
import { MedicineDataService } from '@/backend/infra/external/publicData/medicineDataService';

// Prisma 데이터베이스 클라이언트 인스턴스
const prisma = new PrismaClient();

/**
 * GET /api/medicines
 * 저장된 의약품 데이터 조회 API
 *
 * 기능:
 * - 페이지네이션을 통한 대용량 데이터 처리
 * - 의약품명, 업체명, 원료성분으로 검색 지원
 * - 최신 업데이트 순으로 정렬
 *
 * 쿼리 파라미터:
 * - page: 페이지 번호 (기본값: 1)
 * - limit: 페이지당 항목 수 (기본값: 10, 최대: 100)
 * - search: 검색어 (의약품명, 업체명, 원료성분 대상)
 *
 * 응답 형식:
 * {
 *   success: boolean,
 *   data: {
 *     medicines: Array<Medicine>,
 *     pagination: PaginationInfo
 *   }
 * }
 */
export async function GET(request: NextRequest) {
  try {
    // URL에서 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get('page') || '1');
    const limit = Math.min(Number.parseInt(searchParams.get('limit') || '10'), 100); // 최대 100개로 제한
    const search = searchParams.get('search') || '';

    // 페이지네이션을 위한 스킵 계산
    const skip = (page - 1) * limit;

    // 검색 조건 구성 (대소문자 구분 없이 부분 일치 검색)
    const whereCondition = search
      ? {
          OR: [
            { item_name: { contains: search, mode: 'insensitive' as const } }, // 의약품명 검색
            { entp_name: { contains: search, mode: 'insensitive' as const } }, // 업체명 검색
            { material_name: { contains: search, mode: 'insensitive' as const } }, // 원료성분 검색
          ],
        }
      : {}; // 검색어가 없으면 모든 데이터 조회

    // 검색 조건에 맞는 총 데이터 개수 조회 (페이지네이션 정보 계산용)
    const totalCount = await prisma.medicines.count({
      where: whereCondition,
    });

    // 실제 의약품 데이터 조회 (페이지네이션 적용)
    const medicines = await prisma.medicines.findMany({
      where: whereCondition,
      skip, // 건너뛸 레코드 수
      take: limit, // 가져올 레코드 수
      orderBy: {
        updated_at: 'desc', // 최신 업데이트 순으로 정렬
      },
      // 모든 컬럼 조회 (select 제거하여 전체 필드 반환)
      // select 절을 제거하면 모든 필드가 자동으로 포함됨
    });

    // 페이지네이션 정보 계산
    const totalPages = Math.ceil(totalCount / limit);

    // 성공 응답 반환 (표준 API 응답 형식)
    return NextResponse.json({
      success: true,
      data: {
        medicines, // 조회된 의약품 데이터 배열
        pagination: {
          // 페이지네이션 메타데이터
          currentPage: page,
          totalPages,
          totalCount,
          hasNextPage: page < totalPages, // 다음 페이지 존재 여부
          hasPrevPage: page > 1, // 이전 페이지 존재 여부
        },
      },
    });
  } catch (error) {
    // 에러 로깅 및 클라이언트에 안전한 에러 메시지 반환
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
 * 공공데이터포털 DUR 품목정보 동기화 실행 API
 *
 * 기능:
 * - 공공데이터포털에서 최신 의약품 데이터를 가져와 로컬 DB에 동기화
 * - 테스트 모드와 전체 동기화 모드 지원
 * - 스마트 업데이트: 변경된 데이터만 업데이트하여 성능 최적화
 *
 * 쿼리 파라미터:
 * - mode=test: 소량 테스트 동기화 (1페이지, 10건) - 기본값
 * - mode=full: 전체 데이터 동기화 (모든 페이지, 시간 소요)
 *
 * 환경 변수 요구사항:
 * - PUBLIC_DATA_API_KEY: 공공데이터포털 API 인증키 (디코딩된 상태로 저장)
 *
 * 응답 형식:
 * {
 *   success: boolean,
 *   message: string,
 *   result: {
 *     success: boolean,
 *     totalProcessed: number,
 *     message: string
 *   }
 * }
 */
export async function POST(request: NextRequest) {
  try {
    // URL에서 동기화 모드 파라미터 추출
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('mode') || 'test'; // 기본값은 테스트 모드

    // 환경 변수에서 공공데이터포털 API 키 가져오기
    const apiKey = process.env.PUBLIC_DATA_API_KEY;

    // API 키 존재 여부 검증
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'API 키가 설정되지 않았습니다. 환경변수를 확인해주세요.',
        },
        { status: 500 }
      );
    }



    // MedicineDataService 인스턴스 생성 (API 키 검증 포함)
    const medicineService = new MedicineDataService(apiKey);

    try {
      // 동기화 결과를 저장할 변수 (타입 명시)
      let result: {
        success: boolean;
        totalProcessed: number;
        message: string;
      };

      // 동기화 모드에 따른 분기 처리
      if (mode === 'full') {
        // 전체 데이터 동기화 실행
        result = await medicineService.syncAllMedicineData();
      } else {
        // 소량 테스트 동기화 실행 (개발/테스트용)
        result = await medicineService.syncLimitedMedicineData(1, 10); // 1페이지, 10건만
      }

      // 데이터베이스 연결 정리
      await medicineService.disconnect();

      // 동기화 모드에 따른 성공 메시지 생성
      const message =
        mode === 'full'
          ? '전체 데이터 동기화가 완료되었습니다.'
          : '소량 테스트 동기화가 완료되었습니다.';

      // 성공 응답 반환 (동기화 결과 포함)
      return NextResponse.json({
        success: true,
        message,
        result, // 동기화 상세 결과 (처리된 건수, 생성/업데이트/스킵 통계 등)
      });
    } catch (syncError) {
      // 동기화 실행 중 발생한 오류 처리
      console.error('동기화 실행 오류:', syncError);
      await medicineService.disconnect(); // 에러 발생 시에도 연결 정리

      return NextResponse.json(
        {
          success: false,
          error: `동기화 실행 실패: ${syncError instanceof Error ? syncError.message : '알 수 없는 오류'}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    // API 핸들러 전체에서 발생한 예상치 못한 오류 처리
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
