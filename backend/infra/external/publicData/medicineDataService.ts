import axios from 'axios';
import { PrismaClient } from '@/prisma/generated/index';

/**
 * DUR 의약품 데이터 인터페이스
 * 공공데이터포털 DUR 품목정보 API 응답 데이터 구조 정의
 */
export interface DurMedicineDataInterface {
  ITEM_SEQ: string; // 품목일련번호 (Primary Key)
  ITEM_NAME: string; // 품목명
  ENTP_NAME?: string; // 업체명
  ITEM_PERMIT_DATE?: string; // 허가일자
  ETC_OTC_CODE?: string; // 전문/일반의약품 구분코드
  CLASS_NO?: string; // 분류번호
  CHART?: string; // 성상
  BAR_CODE?: string; // 표준코드
  MATERIAL_NAME?: string; // 원료성분
  EE_DOC_ID?: string; // 효능효과 문서ID
  BIZRNO?: string; // 제조업체 사업자등록번호
  CANCEL_DATE?: string; // 취소일자
  CANCEL_NAME?: string; // 취소사유
  CHANGE_DATE?: string; // 변경일자
  EDI_CODE?: string; // EDI 코드
  INSERT_FILE?: string; // 첨부파일
  NB_DOC_ID?: string; // 용법용량 문서ID
  PACK_UNIT?: string; // 포장단위
  REEXAM_DATE?: string; // 재심사일자
  REEXAM_TARGET?: string; // 재심사대상
  STORAGE_METHOD?: string; // 저장방법
  TYPE_CODE?: string; // 제형코드
  'TYPE_NAME  '?: string; // 제형명 (API 응답에서 필드명에 공백 포함)
  UD_DOC_ID?: string; // 사용상주의사항 문서ID
  VALID_TERM?: string; // 유효기간
}

/**
 * 공공데이터포털 API 응답 구조 인터페이스
 * 표준 공공데이터 API 응답 형식 정의
 */
export interface ApiResponseInterface {
  header: {
    resultCode: string; // 결과코드 (00: 성공)
    resultMsg: string; // 결과메시지
  };
  body: {
    totalCount: number; // 전체 데이터 건수
    items: DurMedicineDataInterface[]; // 실제 데이터 배열
    numOfRows: number; // 한 페이지 결과 수
    pageNo: number; // 페이지 번호
  };
}

/**
 * 의약품 데이터 동기화 서비스 클래스
 * 공공데이터포털 DUR 품목정보 API와 연동하여 의약품 데이터를 관리
 */
class MedicineDataService {
  // 공공데이터포털 DUR 품목정보 API 엔드포인트
  private readonly API_BASE_URL =
    'https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03';

  // API 인증키 (공공데이터포털에서 발급)
  private readonly API_KEY: string;

  // 데이터베이스 클라이언트 (Prisma ORM)
  private readonly prisma: PrismaClient;

  // API 호출 설정값들
  private readonly MAX_ROWS_PER_REQUEST = 100; // 한 번에 요청할 최대 데이터 건수
  private readonly REQUEST_DELAY = 200; // API 호출 간격 (ms) - Rate Limiting 준수

  /**
   * 생성자 - 서비스 초기화
   * @param apiKey 공공데이터포털 API 키 (디코딩된 상태)
   */
  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('API_KEY가 설정되지 않았습니다.');
    }

    // API 키 직접 사용 (ENV에서 디코딩된 키를 받음)
    this.API_KEY = apiKey;
    this.prisma = new PrismaClient();


  }

  /**
   * 소량 테스트용 DUR 품목정보 데이터 동기화
   * 개발/테스트 환경에서 소량의 데이터로 API 연동 테스트
   * @param pageNo 페이지 번호
   * @param numOfRows 요청할 데이터 건수
   * @returns 동기화 결과 정보
   */
  async syncLimitedMedicineData(
    pageNo: number,
    numOfRows: number
  ): Promise<{
    success: boolean;
    totalProcessed: number;
    message: string;
  }> {
    try {

      // API 호출하여 데이터 조회
      const response = await this.fetchDurMedicineData(pageNo, numOfRows);

      // 응답 데이터 검증
      if (!response.body.items || response.body.items.length === 0) {
        return {
          success: false,
          totalProcessed: 0,
          message: 'API에서 데이터를 받을 수 없습니다.',
        };
      }

      // 데이터베이스에 저장
      const saveResult = await this.saveMedicineDataToDB(response.body.items);

      return {
        success: true,
        totalProcessed: response.body.items.length,
        message: `테스트 동기화 완료: ${response.body.items.length}건 처리 | 생성: ${saveResult.createdCount}건, 업데이트: ${saveResult.updatedCount}건, 스킵: ${saveResult.skippedCount}건, 실패: ${saveResult.errorCount}건`,
      };
    } catch (error) {
      console.error('테스트 동기화 중 오류 발생:', error);
      return {
        success: false,
        totalProcessed: 0,
        message: `테스트 동기화 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      };
    }
  }

  /**
   * 전체 DUR 품목정보 데이터를 조회하여 데이터베이스에 저장
   * 공공데이터포털의 모든 의약품 데이터를 페이지별로 순차 처리
   * @returns 전체 동기화 결과 정보
   */
  async syncAllMedicineData(): Promise<{
    success: boolean;
    totalProcessed: number;
    message: string;
  }> {
    try {

      // 첫 번째 요청으로 전체 건수 확인
      const firstResponse = await this.fetchDurMedicineData(1, 1);
      const totalCount = firstResponse.body.totalCount;
      const totalPages = Math.ceil(totalCount / this.MAX_ROWS_PER_REQUEST);


      // 진행 상황 추적 변수들
      let totalProcessed = 0;
      let totalErrorCount = 0;
      let totalCreatedCount = 0;
      let totalUpdatedCount = 0;
      let totalSkippedCount = 0;

      // 페이지별로 데이터 조회 및 저장
      for (let page = 1; page <= totalPages; page++) {
        try {

          // 현재 페이지 데이터 조회
          const response = await this.fetchDurMedicineData(page, this.MAX_ROWS_PER_REQUEST);

          if (response.body.items && response.body.items.length > 0) {
            // 데이터베이스에 저장
            const saveResult = await this.saveMedicineDataToDB(response.body.items);
            totalProcessed += response.body.items.length;

            // 결과 집계
            totalErrorCount += saveResult.errorCount;
            totalCreatedCount += saveResult.createdCount;
            totalUpdatedCount += saveResult.updatedCount;
            totalSkippedCount += saveResult.skippedCount;
          }

          // API 호출 간격 조절 (rate limiting 준수)
          if (page < totalPages) {
            await this.delay(this.REQUEST_DELAY);
          }
        } catch (error) {
          console.error(`${page} 페이지 처리 중 오류 발생:`, error);
          totalErrorCount += this.MAX_ROWS_PER_REQUEST;

          // 연속 오류 발생 시 더 긴 지연
          await this.delay(this.REQUEST_DELAY * 2);
        }
      }

      return {
        success: true,
        totalProcessed,
        message: `DUR 품목정보 동기화가 완료되었습니다. 총 ${totalProcessed}건 처리 | 생성: ${totalCreatedCount}건, 업데이트: ${totalUpdatedCount}건, 스킵: ${totalSkippedCount}건, 실패: ${totalErrorCount}건`,
      };
    } catch (error) {
      console.error('DUR 품목정보 동기화 중 오류 발생:', error);
      return {
        success: false,
        totalProcessed: 0,
        message: `동기화 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      };
    }
  }

  /**
   * DUR 품목정보 API 호출
   * 공공데이터포털 API에 HTTP 요청을 보내고 응답을 처리
   * @param pageNo 조회할 페이지 번호
   * @param numOfRows 한 페이지당 조회할 데이터 건수
   * @returns API 응답 데이터
   */
  private async fetchDurMedicineData(
    pageNo: number,
    numOfRows: number
  ): Promise<ApiResponseInterface> {
    try {
      // API 요청 파라미터 설정
      const params = {
        serviceKey: this.API_KEY,
        pageNo: pageNo.toString(),
        numOfRows: numOfRows.toString(),
        type: 'json',
      };

      // HTTP GET 요청 실행
      const response = await axios.get(this.API_BASE_URL, {
        params,
        timeout: 30000, // 30초 타임아웃
        headers: {
          'User-Agent': 'DUR-Medicine-Sync-Service/1.0',
          Accept: 'application/json',
        },
      });

      // XML 에러 응답 처리 (API 키 오류 등)
      if (
        typeof response.data === 'string' &&
        response.data.includes('<OpenAPI_ServiceResponse>')
      ) {
        console.error('API에서 XML 에러 응답 반환:', response.data);

        if (response.data.includes('SERVICE_KEY_IS_NOT_REGISTERED_ERROR')) {
          throw new Error(
            'API 키가 등록되지 않았거나 유효하지 않습니다. 공공데이터포털에서 API 키를 확인해주세요.'
          );
        }

        if (response.data.includes('SERVICE_ACCESS_DENIED_ERROR')) {
          throw new Error('API 접근이 거부되었습니다. API 승인 상태를 확인해주세요.');
        }

        throw new Error(`API에서 에러 응답을 반환했습니다: ${response.data}`);
      }

      const data = response.data as ApiResponseInterface;

      // JSON 응답 구조 검증
      if (!data || !data.header) {
        throw new Error('API 응답 구조가 예상과 다릅니다.');
      }

      // API 결과 코드 확인
      if (data.header.resultCode !== '00') {
        throw new Error(`API 오류: ${data.header.resultMsg}`);
      }

      return data;
    } catch (error) {

      // Axios 에러 상세 정보 출력
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as {
          response?: {
            status?: number;
            headers?: Record<string, string>;
            data?: unknown;
          };
          config?: {
            url?: string;
            params?: Record<string, string>;
          };
        };
        console.error('HTTP 상태:', axiosError.response?.status);
        console.error('응답 데이터:', axiosError.response?.data);
      }

      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      throw new Error(`API 호출 실패: ${errorMessage}`);
    }
  }

  /**
   * 의약품 데이터를 데이터베이스에 저장 (스마트 업데이트)
   * 기존 데이터와 비교하여 생성/업데이트/스킵을 지능적으로 처리
   * @param items API에서 받은 의약품 데이터 배열
   * @returns 저장 결과 통계
   */
  private async saveMedicineDataToDB(items: DurMedicineDataInterface[]): Promise<{
    successCount: number;
    errorCount: number;
    createdCount: number;
    updatedCount: number;
    skippedCount: number;
  }> {
    // 결과 통계 변수들
    let successCount = 0;
    let errorCount = 0;
    let createdCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    // 각 의약품 데이터를 순차 처리
    for (const item of items) {
      try {
        // 기존 데이터 확인 (Primary Key: item_seq)
        const existingItem = await this.prisma.medicines.findUnique({
          where: {
            item_seq: item.ITEM_SEQ,
          },
        });

        // API 데이터를 DB 스키마에 맞게 변환
        const newData = {
          item_name: item.ITEM_NAME || '',
          entp_name: item.ENTP_NAME || null,
          item_permit_date: this.parseDate(item.ITEM_PERMIT_DATE),
          etc_otc_code: item.ETC_OTC_CODE || null,
          class_no: item.CLASS_NO || null,
          chart: item.CHART || null,
          bar_code: item.BAR_CODE || null,
          material_name: item.MATERIAL_NAME || null,
          ee_doc_id: item.EE_DOC_ID || null,
          bizrno: item.BIZRNO || null,
          cancel_date: this.parseDate(item.CANCEL_DATE),
          cancel_name: item.CANCEL_NAME || null,
          change_date: this.parseDate(item.CHANGE_DATE),
          edi_code: item.EDI_CODE || null,
          insert_file: item.INSERT_FILE || null,
          nb_doc_id: item.NB_DOC_ID || null,
          pack_unit: item.PACK_UNIT || null,
          reexam_date: this.parseDate(item.REEXAM_DATE),
          reexam_target: item.REEXAM_TARGET || null,
          storage_method: item.STORAGE_METHOD || null,
          type_code: item.TYPE_CODE || null,
          type_name: item['TYPE_NAME  '] || null,
          ud_doc_id: item.UD_DOC_ID || null,
          valid_term: item.VALID_TERM || null,
        };

        if (!existingItem) {
          // 새 데이터 생성
          await this.prisma.medicines.create({
            data: {
              item_seq: item.ITEM_SEQ,
              ...newData,
            },
          });
          createdCount++;
        } else {
          // 데이터 변경 확인
          const hasChanges = this.hasDataChanged(existingItem, newData);

          if (hasChanges) {
            // 변경사항이 있을 때만 업데이트
            await this.prisma.medicines.update({
              where: {
                item_seq: item.ITEM_SEQ,
              },
              data: {
                ...newData,
                updated_at: new Date(),
              },
            });
            updatedCount++;
          } else {
            // 동일한 데이터는 스킵
            skippedCount++;
          }
        }

        successCount++;
      } catch (error) {
        console.error(`의약품 데이터 저장 실패 (ITEM_SEQ: ${item.ITEM_SEQ}):`, error);
        errorCount++;
      }
    }

    return {
      successCount,
      errorCount,
      createdCount,
      updatedCount,
      skippedCount,
    };
  }

  /**
   * 데이터 변경 여부 확인
   * 기존 데이터와 새 데이터를 필드별로 비교하여 변경사항 감지
   * @param existingData 기존 데이터베이스 데이터
   * @param newData 새로운 API 데이터
   * @returns 변경 여부 (true: 변경됨, false: 동일함)
   */
  private hasDataChanged(
    existingData: Record<string, unknown>,
    newData: Record<string, unknown>
  ): boolean {
    // 비교할 문자열 필드들
    const compareFields = [
      'item_name',
      'entp_name',
      'etc_otc_code',
      'class_no',
      'chart',
      'bar_code',
      'material_name',
      'ee_doc_id',
      'bizrno',
      'cancel_name',
      'edi_code',
      'insert_file',
      'nb_doc_id',
      'pack_unit',
      'reexam_target',
      'storage_method',
      'type_code',
      'type_name',
      'ud_doc_id',
      'valid_term',
    ];

    // 문자열 필드 비교
    for (const field of compareFields) {
      if (existingData[field] !== newData[field]) {
        return true;
      }
    }

    // 날짜 필드 비교 (타임스탬프로 변환하여 비교)
    const dateFields = ['item_permit_date', 'cancel_date', 'change_date', 'reexam_date'];
    for (const field of dateFields) {
      const existingDate =
        existingData[field] instanceof Date ? (existingData[field] as Date).getTime() : null;
      const newDate = newData[field] instanceof Date ? (newData[field] as Date).getTime() : null;

      if (existingDate !== newDate) {
        return true;
      }
    }

    return false;
  }

  /**
   * 날짜 문자열을 Date 객체로 변환
   * 다양한 날짜 형식을 처리하여 표준 Date 객체로 변환
   * @param dateString 변환할 날짜 문자열
   * @returns Date 객체 또는 null (파싱 실패 시)
   */
  private parseDate(dateString?: string): Date | null {
    if (!dateString) return null;

    try {
      // YYYYMMDD 형식의 날짜 문자열을 처리
      if (dateString.length === 8 && /^\d{8}$/.test(dateString)) {
        const year = Number.parseInt(dateString.substring(0, 4));
        const month = Number.parseInt(dateString.substring(4, 6)) - 1;
        const day = Number.parseInt(dateString.substring(6, 8));
        return new Date(year, month, day);
      }

      // "2021August23rd" 형식의 날짜 처리
      const datePattern = /^(\d{4})([A-Za-z]+)(\d{1,2})(?:st|nd|rd|th)?$/;
      const match = dateString.match(datePattern);

      if (match) {
        const year = Number.parseInt(match[1]);
        const monthName = match[2];
        const day = Number.parseInt(match[3]);

        // 월 이름을 숫자로 변환
        const monthMap: Record<string, number> = {
          January: 0,
          February: 1,
          March: 2,
          April: 3,
          May: 4,
          June: 5,
          July: 6,
          August: 7,
          September: 8,
          October: 9,
          November: 10,
          December: 11,
        };

        const month = monthMap[monthName];
        if (month !== undefined) {
          return new Date(year, month, day);
        }
      }

      // 다른 형식의 날짜 처리 (표준 Date 생성자 사용)
      const date = new Date(dateString);
      return Number.isNaN(date.getTime()) ? null : date;
    } catch {
      console.warn(`날짜 파싱 실패: ${dateString}`);
      return null;
    }
  }

  /**
   * 지연 함수
   * API 호출 간격 조절을 위한 비동기 대기 함수
   * @param ms 대기할 시간 (밀리초)
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 데이터베이스 연결 종료
   * Prisma 클라이언트 연결을 안전하게 종료
   */
  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

export { MedicineDataService };
