import axios from 'axios';
import { PrismaClient } from '@/prisma/generated/index';

export interface DurMedicineDataInterface {
  ITEM_SEQ: string;
  ITEM_NAME: string;
  ENTP_NAME?: string;
  ITEM_PERMIT_DATE?: string;
  ETC_OTC_CODE?: string;
  CLASS_NO?: string;
  CHART?: string;
  BAR_CODE?: string;
  MATERIAL_NAME?: string;
  EE_DOC_ID?: string;
  BIZRNO?: string;
  CANCEL_DATE?: string;
  CANCEL_NAME?: string;
  CHANGE_DATE?: string;
  EDI_CODE?: string;
  INSERT_FILE?: string;
  NB_DOC_ID?: string;
  PACK_UNIT?: string;
  REEXAM_DATE?: string;
  REEXAM_TARGET?: string;
  STORAGE_METHOD?: string;
  TYPE_CODE?: string;
  TYPE_NAME?: string;
  UD_DOC_ID?: string;
  VALID_TERM?: string;
}

export interface ApiResponseInterface {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    totalCount: number;
    items: DurMedicineDataInterface[];
    numOfRows: number;
    pageNo: number;
  };
}

class MedicineDataService {
  private readonly API_BASE_URL =
    'https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03';
  private readonly API_KEY: string;
  private readonly prisma: PrismaClient;
  private readonly MAX_ROWS_PER_REQUEST = 100;
  private readonly REQUEST_DELAY = 200; // API 호출 간격 (ms)

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('API_KEY가 설정되지 않았습니다.');
    }

    // API 키 URL 디코딩 (공공데이터포털 API 키 특수문자 처리)
    this.API_KEY = decodeURIComponent(apiKey);
    this.prisma = new PrismaClient();

    console.log(`🔑 원본 API 키 길이: ${apiKey.length}자`);
    console.log(`🔑 디코딩된 API 키 길이: ${this.API_KEY.length}자`);
  }

  /**
   * 소량 테스트용 DUR 품목정보 데이터 동기화
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
      console.log(`🧪 테스트 동기화 시작: 페이지 ${pageNo}, 건수 ${numOfRows}`);

      const response = await this.fetchDurMedicineData(pageNo, numOfRows);

      if (!response.body.items || response.body.items.length === 0) {
        return {
          success: false,
          totalProcessed: 0,
          message: 'API에서 데이터를 받을 수 없습니다.',
        };
      }

      const saveResult = await this.saveMedicineDataToDB(response.body.items);

      console.log(`✅ 테스트 완료: ${response.body.items.length}건 처리`);
      console.log(
        `📊 결과: 성공 ${saveResult.successCount}, 실패 ${saveResult.errorCount}, 생성 ${saveResult.createdCount}, 업데이트 ${saveResult.updatedCount}, 스킵 ${saveResult.skippedCount}`
      );

      return {
        success: true,
        totalProcessed: response.body.items.length,
        message: `테스트 동기화 완료: ${response.body.items.length}건 처리 | 생성: ${saveResult.createdCount}건, 업데이트: ${saveResult.updatedCount}건, 스킵: ${saveResult.skippedCount}건, 실패: ${saveResult.errorCount}건`,
      };
    } catch (error) {
      console.error('💥 테스트 동기화 중 오류 발생:', error);
      return {
        success: false,
        totalProcessed: 0,
        message: `테스트 동기화 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      };
    }
  }

  /**
   * 전체 DUR 품목정보 데이터를 조회하여 데이터베이스에 저장
   */
  async syncAllMedicineData(): Promise<{
    success: boolean;
    totalProcessed: number;
    message: string;
  }> {
    try {
      console.log('🚀 DUR 품목정보 전체 동기화를 시작합니다...');

      // 첫 번째 요청으로 전체 건수 확인
      const firstResponse = await this.fetchDurMedicineData(1, 1);
      const totalCount = firstResponse.body.totalCount;
      const totalPages = Math.ceil(totalCount / this.MAX_ROWS_PER_REQUEST);

      console.log(`📊 전체 데이터 건수: ${totalCount}건, 예상 페이지 수: ${totalPages}페이지`);

      let totalProcessed = 0;
      let totalErrorCount = 0;
      let totalCreatedCount = 0;
      let totalUpdatedCount = 0;
      let totalSkippedCount = 0;

      // 페이지별로 데이터 조회 및 저장
      for (let page = 1; page <= totalPages; page++) {
        try {
          console.log(
            `⏳ ${page}/${totalPages} 페이지 처리 중... (${(((page - 1) / totalPages) * 100).toFixed(1)}%)`
          );

          const response = await this.fetchDurMedicineData(page, this.MAX_ROWS_PER_REQUEST);

          if (response.body.items && response.body.items.length > 0) {
            const saveResult = await this.saveMedicineDataToDB(response.body.items);
            totalProcessed += response.body.items.length;

            totalErrorCount += saveResult.errorCount;
            totalCreatedCount += saveResult.createdCount;
            totalUpdatedCount += saveResult.updatedCount;
            totalSkippedCount += saveResult.skippedCount;

            console.log(`✅ ${page} 페이지 완료: ${response.body.items.length}건 처리`);
            console.log(
              `📊 페이지 결과: 생성 ${saveResult.createdCount}, 업데이트 ${saveResult.updatedCount}, 스킵 ${saveResult.skippedCount}, 실패 ${saveResult.errorCount}`
            );
          }

          // API 호출 간격 조절 (rate limiting 준수)
          if (page < totalPages) {
            await this.delay(this.REQUEST_DELAY);
          }
        } catch (error) {
          console.error(`❌ ${page} 페이지 처리 중 오류 발생:`, error);
          totalErrorCount += this.MAX_ROWS_PER_REQUEST;

          // 연속 오류 발생 시 더 긴 지연
          await this.delay(this.REQUEST_DELAY * 2);
        }
      }

      console.log(`🎉 전체 동기화 완료: 총 ${totalProcessed}건 처리`);
      console.log(
        `📊 최종 결과: 생성 ${totalCreatedCount}건, 업데이트 ${totalUpdatedCount}건, 스킵 ${totalSkippedCount}건, 실패 ${totalErrorCount}건`
      );

      return {
        success: true,
        totalProcessed,
        message: `DUR 품목정보 동기화가 완료되었습니다. 총 ${totalProcessed}건 처리 | 생성: ${totalCreatedCount}건, 업데이트: ${totalUpdatedCount}건, 스킵: ${totalSkippedCount}건, 실패: ${totalErrorCount}건`,
      };
    } catch (error) {
      console.error('💥 DUR 품목정보 동기화 중 오류 발생:', error);
      return {
        success: false,
        totalProcessed: 0,
        message: `동기화 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`,
      };
    }
  }

  /**
   * DUR 품목정보 API 호출
   */
  private async fetchDurMedicineData(
    pageNo: number,
    numOfRows: number
  ): Promise<ApiResponseInterface> {
    try {
      const params = {
        serviceKey: this.API_KEY,
        pageNo: pageNo.toString(),
        numOfRows: numOfRows.toString(),
        type: 'json',
      };

      console.log(`🔗 API 호출: 페이지 ${pageNo}, 요청 건수 ${numOfRows}`);
      console.log(`🔗 API URL: ${this.API_BASE_URL}`);
      console.log(`🔑 API 키 길이: ${this.API_KEY.length}자`);
      console.log(`🔑 API 키 앞 30자: ${this.API_KEY.substring(0, 30)}...`);
      console.log('📋 요청 파라미터:', JSON.stringify(params, null, 2));

      const response = await axios.get(this.API_BASE_URL, {
        params,
        timeout: 30000, // 30초 타임아웃
        headers: {
          'User-Agent': 'DUR-Medicine-Sync-Service/1.0',
          Accept: 'application/json',
        },
      });

      // XML 에러 응답 처리
      if (
        typeof response.data === 'string' &&
        response.data.includes('<OpenAPI_ServiceResponse>')
      ) {
        console.error('❌ API에서 XML 에러 응답 반환:', response.data);

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

      // JSON 응답 구조 확인
      if (!data || !data.header) {
        console.error('⚠️ 예상과 다른 API 응답 구조:', data);
        throw new Error('API 응답 구조가 예상과 다릅니다.');
      }

      if (data.header.resultCode !== '00') {
        console.error(`❌ API 에러 코드: ${data.header.resultCode}`);
        console.error(`❌ API 에러 메시지: ${data.header.resultMsg}`);
        throw new Error(`API 오류: ${data.header.resultMsg}`);
      }

      console.log(`✅ API 응답 성공: ${data.body.items?.length || 0}건 수신`);
      return data;
    } catch (error) {
      console.error('💥 API 호출 상세 에러:', error);

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
   */
  private async saveMedicineDataToDB(items: DurMedicineDataInterface[]): Promise<{
    successCount: number;
    errorCount: number;
    createdCount: number;
    updatedCount: number;
    skippedCount: number;
  }> {
    let successCount = 0;
    let errorCount = 0;
    let createdCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    for (const item of items) {
      try {
        // 기존 데이터 확인
        const existingItem = await this.prisma.medicines.findUnique({
          where: {
            item_seq: item.ITEM_SEQ,
          },
        });

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
          type_name: item.TYPE_NAME || null,
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
          console.log(`🆕 새 데이터 생성: ${item.ITEM_SEQ}`);
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
            console.log(`🔄 데이터 업데이트: ${item.ITEM_SEQ}`);
          } else {
            // 동일한 데이터는 스킵
            skippedCount++;
            console.log(`⏭️ 동일 데이터 스킵: ${item.ITEM_SEQ}`);
          }
        }

        successCount++;
      } catch (error) {
        console.error(`💥 의약품 데이터 저장 실패 (ITEM_SEQ: ${item.ITEM_SEQ}):`, error);
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
   */
  private hasDataChanged(
    existingData: Record<string, unknown>,
    newData: Record<string, unknown>
  ): boolean {
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
        console.log(`📝 필드 변경 감지 (${field}): "${existingData[field]}" → "${newData[field]}"`);
        return true;
      }
    }

    // 날짜 필드 비교
    const dateFields = ['item_permit_date', 'cancel_date', 'change_date', 'reexam_date'];
    for (const field of dateFields) {
      const existingDate =
        existingData[field] instanceof Date ? (existingData[field] as Date).getTime() : null;
      const newDate = newData[field] instanceof Date ? (newData[field] as Date).getTime() : null;

      if (existingDate !== newDate) {
        console.log(
          `📅 날짜 필드 변경 감지 (${field}): ${existingData[field]} → ${newData[field]}`
        );
        return true;
      }
    }

    return false;
  }

  /**
   * 날짜 문자열을 Date 객체로 변환
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

      // 다른 형식의 날짜 처리
      const date = new Date(dateString);
      return Number.isNaN(date.getTime()) ? null : date;
    } catch {
      console.warn(`⚠️ 날짜 파싱 실패: ${dateString}`);
      return null;
    }
  }

  /**
   * 지연 함수
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * 데이터베이스 연결 종료
   */
  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

export { MedicineDataService };
