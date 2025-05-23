import prisma from '../../../../lib/prisma'; // 싱글톤 인스턴스 사용
import axios from 'axios';
import type { PrismaClient } from '@prisma/generated';

export interface MedicineResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    pageNo: number;
    totalCount: number;
    numOfRows: number;
    items: MedicineItem[] | MedicineItem;
  };
}

interface MedicineItem {
  ITEM_SEQ: string;
  ITEM_NAME: string;
  ENTP_NAME: string;
  ITEM_PERMIT_DATE: string;
  ETC_OTC_CODE: string;
  CLASS_NO: string;
  CHART: string;
  BAR_CODE: string;
  MATERIAL_NAME: string;
  EE_DOC_ID: string;
  UD_DOC_ID: string;
  NB_DOC_ID: string;
  INSERT_FILE: string;
  STORAGE_METHOD: string;
  VALID_TERM: string;
  REEXAM_TARGET: string;
  REEXAM_DATE: string;
  PACK_UNIT: string;
  EDI_CODE: string;
  CANCEL_DATE: string;
  CANCEL_NAME: string;
  TYPE_CODE: string;
  TYPE_NAME: string;
  'TYPE_NAME  '?: string; // 공백이 포함된 필드 처리
  CHANGE_DATE: string;
  BIZRNO: string;
}

export class MedicineDataService {
  private readonly baseUrl =
    'https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03';
  private readonly apiKey = process.env.NEXT_PUBLIC_MEDICINE_API_KEY;

  // 개선된 날짜 형식 변환 함수
  private convertDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr || dateStr === '') return null;

    try {
      // "2003October31st" 형식 처리
      const match = dateStr.match(
        /^(\d{4})(January|February|March|April|May|June|July|August|September|October|November|December)(\d+)(?:st|nd|rd|th)$/
      );
      if (match) {
        const year = Number.parseInt(match[1]);
        const month = {
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
        }[match[2]] as number;
        const day = Number.parseInt(match[3]);
        return new Date(year, month, day);
      }

      // ISO 형식 확인 (예: 2017-10-01T00:00:00)
      if (dateStr.includes('-') || dateStr.includes('T')) {
        return new Date(dateStr);
      }

      // YYYYMMDD 형식 확인
      if (/^\d{8}$/.test(dateStr)) {
        const year = Number.parseInt(dateStr.substring(0, 4));
        const month = Number.parseInt(dateStr.substring(4, 6)) - 1;
        const day = Number.parseInt(dateStr.substring(6, 8));
        return new Date(year, month, day);
      }

      console.log(`날짜 형식 불일치: ${dateStr}`);
      return null;
    } catch (error) {
      console.error(`날짜 변환 오류 (${dateStr}):`, error);
      return null;
    }
  }

  // 특정 약품만 검색하여 DB에 저장
  async fetchAndSaveMedicine(itemName: string) {
    try {
      console.log(`'${itemName}' 약품 데이터 요청 시작`);

      // DB 연결 테스트
      try {
        const count = await prisma.medicines.count();
        console.log(`현재 의약품 수: ${count}`);
      } catch (connError) {
        console.error('DB 연결 오류:', connError);
        throw connError;
      }

      if (!this.apiKey) {
        throw new Error('API 키가 설정되지 않았습니다. 환경 변수 MEDICINE_API_KEY를 확인해주세요.');
      }

      const params = {
        type: 'json',
        serviceKey: decodeURIComponent(this.apiKey), // API 키를 디코딩된 상태로 사용
        itemName: encodeURIComponent(itemName), // 검색어 인코딩
        pageNo: 1,
        numOfRows: 100,
      };

      console.log('API 요청 URL:', this.baseUrl);
      console.log('API 요청 파라미터:', {
        ...params,
        serviceKey: '(비공개)',
      });

      const response = await axios.get<MedicineResponse>(this.baseUrl, {
        params,
      });

      // 전체 응답 로깅
      console.log('API 원본 응답:', JSON.stringify(response.data, null, 2));

      // 응답 구조 검증
      if (!response.data) {
        throw new Error('API 응답이 비어있습니다.');
      }

      if (!response.data.header) {
        throw new Error(`API 응답에 header가 없습니다: ${JSON.stringify(response.data)}`);
      }

      console.log('API 응답 코드:', response.data.header.resultCode);
      console.log('API 응답 메시지:', response.data.header.resultMsg);

      if (response.data.header.resultCode !== '00') {
        throw new Error(`API Error: ${response.data.header.resultMsg}`);
      }

      // API 응답 형식 확인 및 처리
      let medicines: MedicineItem[] = [];
      if (Array.isArray(response.data.body.items)) {
        medicines = response.data.body.items;
      } else if (response.data.body.items && typeof response.data.body.items === 'object') {
        medicines = [response.data.body.items as MedicineItem];
      }

      console.log(`검색된 약품 개수: ${medicines.length}`);

      if (medicines.length === 0) {
        return {
          success: true,
          message: `'${itemName}' 검색 결과가 없습니다.`,
          data: [],
        };
      }

      // 첫 번째 항목 로깅
      console.log('첫 번째 약품 데이터 샘플:', medicines[0]);

      // 검색된 약품 저장
      const result = await this.saveAllMedicinesToDB(medicines);

      return {
        success: true,
        message: `'${itemName}' 검색 결과 ${medicines.length}개 데이터 중 ${result.count}개가 저장되었습니다.`,
        data: medicines,
      };
    } catch (error) {
      console.error(`'${itemName}' 검색 및 저장 중 오류 발생:`, error);
      if (error instanceof Error) {
        console.error('오류 메시지:', error.message);
        console.error('오류 스택:', error.stack);
      }
      throw error;
    }
  }

  private async saveAllMedicinesToDB(medicines: MedicineItem[]) {
    try {
      console.log('데이터베이스에 의약품 데이터 저장 시작...');
      let totalSaved = 0;

      // 원본 데이터 로깅
      console.log('첫 번째 약품 데이터(원본):', JSON.stringify(medicines[0], null, 2));

      // 각 약품을 개별적으로 저장
      for (const medicine of medicines) {
        try {
          // 공백 필드 확인 로깅
          if ('TYPE_NAME  ' in medicine) {
            console.log('공백 포함 필드 존재 확인:', medicine['TYPE_NAME  ']);
          }

          // 데이터 변환 및 검증
          const itemData = {
            item_seq: medicine.ITEM_SEQ,
            item_name: medicine.ITEM_NAME ? medicine.ITEM_NAME.trim().substring(0, 255) : '',
            entp_name: medicine.ENTP_NAME ? medicine.ENTP_NAME.trim().substring(0, 255) : null,
            item_permit_date: this.convertDate(medicine.ITEM_PERMIT_DATE),
            etc_otc_code: medicine.ETC_OTC_CODE
              ? medicine.ETC_OTC_CODE.trim().substring(0, 50)
              : null,
            class_no: medicine.CLASS_NO ? medicine.CLASS_NO.trim().substring(0, 100) : null,
            chart: medicine.CHART ? medicine.CHART.trim() : null,
            bar_code: medicine.BAR_CODE ? medicine.BAR_CODE.trim().substring(0, 50) : null,
            material_name: medicine.MATERIAL_NAME ? medicine.MATERIAL_NAME.trim() : null,
            ee_doc_id: medicine.EE_DOC_ID ? medicine.EE_DOC_ID.trim().substring(0, 255) : null,
            bizrno: medicine.BIZRNO ? medicine.BIZRNO.trim().substring(0, 20) : null,
            cancel_date: this.convertDate(medicine.CANCEL_DATE),
            cancel_name: medicine.CANCEL_NAME
              ? medicine.CANCEL_NAME.trim().substring(0, 100)
              : null,
            change_date: this.convertDate(medicine.CHANGE_DATE),
            created_at: new Date(),
            edi_code: medicine.EDI_CODE ? medicine.EDI_CODE.trim().substring(0, 50) : null,
            insert_file: medicine.INSERT_FILE
              ? medicine.INSERT_FILE.trim().substring(0, 255)
              : null,
            nb_doc_id: medicine.NB_DOC_ID ? medicine.NB_DOC_ID.trim().substring(0, 255) : null,
            pack_unit: medicine.PACK_UNIT ? medicine.PACK_UNIT.trim().substring(0, 255) : null,
            reexam_date: this.convertDate(medicine.REEXAM_DATE),
            reexam_target: medicine.REEXAM_TARGET
              ? medicine.REEXAM_TARGET.trim().substring(0, 255)
              : null,
            storage_method: medicine.STORAGE_METHOD
              ? medicine.STORAGE_METHOD.trim().substring(0, 255)
              : null,
            type_code: medicine.TYPE_CODE ? medicine.TYPE_CODE.trim().substring(0, 10) : null,
            type_name:
              (medicine['TYPE_NAME  ']?.trim() || medicine.TYPE_NAME?.trim() || '').substring(
                0,
                100
              ) || null,
            ud_doc_id: medicine.UD_DOC_ID ? medicine.UD_DOC_ID.trim().substring(0, 255) : null,
            updated_at: new Date(),
            valid_term: medicine.VALID_TERM ? medicine.VALID_TERM.trim().substring(0, 100) : null,
          };

          // 변환된 데이터 로깅
          console.log('변환된 데이터:', JSON.stringify(itemData, null, 2));

          // 유효성 검사
          if (!itemData.item_seq) {
            console.error('필수 필드(item_seq)가 누락되었습니다:', medicine);
            continue;
          }

          // DB 저장 시도
          try {
            console.log('Prisma upsert 시도:', itemData.item_seq);
            const result = await prisma.medicines.upsert({
              where: { item_seq: itemData.item_seq },
              update: itemData,
              create: itemData,
            });
            console.log(`항목 저장 성공 (${itemData.item_seq}): ${itemData.item_name}`);
            console.log('저장된 데이터:', result);
            totalSaved++;
          } catch (dbError) {
            console.error('DB 저장 오류 상세 정보:');
            console.error(
              '- 오류 메시지:',
              dbError instanceof Error ? dbError.message : 'Unknown error'
            );
            console.error(
              '- 오류 타입:',
              dbError instanceof Error ? dbError.constructor.name : 'Unknown type'
            );
            console.error('- 대상 데이터:', JSON.stringify(itemData, null, 2));

            if (dbError instanceof Error && 'code' in dbError) {
              const prismaError = dbError as Error & { code?: string; meta?: unknown };
              console.error('- Prisma 오류 코드:', prismaError.code);
              console.error('- Prisma 메타 정보:', prismaError.meta);
            }

            throw dbError;
          }
        } catch (itemError) {
          console.error(`항목 처리 실패 (${medicine.ITEM_SEQ}):`, itemError);
          console.error('실패한 데이터:', JSON.stringify(medicine, null, 2));
          throw itemError;
        }
      }

      console.log(`의약품 데이터 저장 완료: 총 ${totalSaved}/${medicines.length}개 항목 저장됨`);
      return { count: totalSaved };
    } catch (error) {
      console.error('DB 저장 중 오류 발생:', error);
      if (error instanceof Error) {
        console.error('오류 메시지:', error.message);
        console.error('오류 스택:', error.stack);
      }
      throw error;
    }
  }
}
