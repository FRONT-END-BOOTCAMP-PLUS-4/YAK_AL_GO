import axios from 'axios';
import type { MedicineResponse } from '@/backend/infra/external/publicData/medicineDataService';

interface ApiResponseItem {
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
  TYPE_NAME: string; // 공백 필드명 수정
  CHANGE_DATE: string;
  BIZRNO: string;
}

interface ApiResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    totalCount: number;
    items: ApiResponseItem[] | ApiResponseItem;
  };
}

function convertDate(dateStr: string | null | undefined): Date | null {
  if (!dateStr) return null;

  // 날짜 범위 분리 (예: 1999-June-8th~2005-June-7th)
  const [cleanDate] = dateStr.split('~').map((s) => s.trim());

  // 월 이름 매핑
  const months: { [key: string]: number } = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  // 정규식 패턴
  const patterns = [
    /(\d{4})-?(\w+)-?(\d+)[a-z]{0,2}/i, // 1999-June-8th
    /(\d{4})(\w+)(\d+)/i, // 1999June7th
  ];

  for (const pattern of patterns) {
    const match = cleanDate.match(pattern);
    if (match) {
      const year = Number.parseInt(match[1], 10);
      const month = months[match[2].toLowerCase().substring(0, 3)];
      const day = Number.parseInt(match[3].replace(/\D/g, ''), 10);

      if (!Number.isNaN(year) && month !== undefined && !Number.isNaN(day)) {
        return new Date(year, month, day);
      }
    }
  }

  // ISO 형식 처리 (2023-10-01T00:00:00)
  if (cleanDate.includes('T')) {
    return new Date(cleanDate);
  }

  // YYYYMMDD 형식 (19990608)
  if (/^\d{8}$/.test(cleanDate)) {
    const year = Number.parseInt(cleanDate.substring(0, 4), 10);
    const month = Number.parseInt(cleanDate.substring(4, 6), 10) - 1;
    const day = Number.parseInt(cleanDate.substring(6, 8), 10);
    return new Date(year, month, day);
  }

  console.log(`지원하지 않는 날짜 형식: ${dateStr}`);
  return null;
}

export async function fetchMedicineData(apiKey: string, itemName?: string, maxPages = 2) {
  const baseUrl = 'https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03';
  const numOfRows = 100;
  const allItems = [];
  let errorCount = 0;
  const MAX_ERROR_COUNT = 3;

  // API 키 검증 및 로깅
  console.log('API 키 구성 확인:', {
    키길이: apiKey?.length,
    키일부: `${apiKey?.substring(0, 10)}...`,
  });

  for (let pageNo = 1; pageNo <= maxPages; pageNo++) {
    try {
      console.log(`페이지 ${pageNo} 데이터 요청 중...`);

      // 중요: API 키에서 + 기호를 %2B로 직접 변환 (다른 인코딩은 하지 않음)
      const processedKey = apiKey.replace(/\+/g, '%2B');

      // URL 직접 구성 (params 객체 사용하지 않음)
      let url = `${baseUrl}?serviceKey=${processedKey}&type=json&pageNo=${pageNo}&numOfRows=${numOfRows}`;

      // 검색어가 있으면 추가 (한글은 인코딩 필요)
      if (itemName) {
        url += `&itemName=${encodeURIComponent(itemName)}`;
      }

      console.log('요청 URL (마스킹됨):', url.replace(processedKey, '***마스킹***'));

      const response = await axios.get<ApiResponse>(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      // 응답 타입 확인
      console.log(`API 응답 데이터 유형: ${typeof response.data}`);

      // XML 응답 확인
      if (
        typeof (response.data as unknown) === 'string' &&
        (response.data as unknown as string).includes('<OpenAPI_ServiceResponse>')
      ) {
        console.error('XML 응답 감지:', response.data);
        throw new Error('API가 XML 오류 응답을 반환했습니다. 서비스 키를 확인하세요.');
      }

      // 응답 구조 검증
      if (!response.data?.header) {
        console.error('API 응답 구조 오류:', JSON.stringify(response.data, null, 2));
        throw new Error('API 응답에 header가 없습니다');
      }

      if (response.data.header.resultCode !== '00') {
        console.error('API 오류 응답:', response.data.header);
        throw new Error(`API Error: ${response.data.header.resultMsg}`);
      }

      const totalCount = response.data.body.totalCount || 0;
      const totalPages = Math.ceil(totalCount / numOfRows);

      console.log(
        `전체 데이터: ${totalCount}개, 전체 페이지: ${totalPages}, 현재 페이지: ${pageNo}`
      );

      if (!response.data.body.items) {
        console.log(`페이지 ${pageNo}에 항목이 없습니다`);
        break;
      }

      const items = Array.isArray(response.data.body.items)
        ? response.data.body.items
        : [response.data.body.items];

      if (items.length === 0) {
        console.log('더 이상 데이터가 없습니다');
        break;
      }

      // 첫 번째 항목 원본 데이터 로깅
      if (pageNo === 1) {
        console.log('원본 항목 데이터:', JSON.stringify(items[0], null, 2));
      }

      // 데이터 변환 및 정제
      const transformedItems = items.map((item: ApiResponseItem) => {
        // 날짜 변환 먼저 시도
        const item_permit_date = convertDate(item.ITEM_PERMIT_DATE);
        const reexam_date = convertDate(item.REEXAM_DATE);
        const cancel_date = convertDate(item.CANCEL_DATE);
        const change_date = convertDate(item.CHANGE_DATE);

        // 디버깅 로그
        if (item.REEXAM_DATE && !reexam_date) {
          console.log(`유효하지 않은 날짜 형식(reexam_date): ${item.REEXAM_DATE}`);
        }

        return {
          item_seq: item.ITEM_SEQ,
          item_name: (item.ITEM_NAME || '').trim(),
          entp_name: (item.ENTP_NAME || '').trim() || null,
          item_permit_date: item_permit_date,
          etc_otc_code: item.ETC_OTC_CODE || null,
          class_no: item.CLASS_NO || null,
          chart: item.CHART || null,
          bar_code: item.BAR_CODE || null,
          material_name: item.MATERIAL_NAME || null,
          ee_doc_id: item.EE_DOC_ID || null,
          ud_doc_id: item.UD_DOC_ID || null,
          nb_doc_id: item.NB_DOC_ID || null,
          insert_file: item.INSERT_FILE || null,
          storage_method: item.STORAGE_METHOD || null,
          valid_term: item.VALID_TERM || null,
          reexam_target: item.REEXAM_TARGET || null,
          reexam_date: reexam_date, // null 허용
          pack_unit: item.PACK_UNIT || null,
          edi_code: item.EDI_CODE || null,
          cancel_date: cancel_date,
          cancel_name: item.CANCEL_NAME || null,
          type_code: item.TYPE_CODE || null,
          type_name: (item.TYPE_NAME || '').trim() || null, // 공백 주의
          change_date: change_date,
          bizrno: item.BIZRNO || null,
          created_at: new Date(),
          updated_at: new Date(),
        };
      });

      console.log(`페이지 ${pageNo}에서 ${transformedItems.length}개 항목 변환 완료`);

      // 변환된 데이터 추가
      allItems.push(...transformedItems);

      // 마지막 페이지 확인
      if (pageNo >= totalPages) {
        console.log('모든 페이지 처리 완료');
        break;
      }

      // API 호출 간격 조절
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`페이지 ${pageNo} 처리 중 오류:`, error);
      errorCount++;

      if (errorCount > MAX_ERROR_COUNT) {
        console.error(`최대 오류 수(${MAX_ERROR_COUNT})를 초과하여 작업을 중단합니다.`);
        break;
      }

      console.log(`오류 발생 후 다음 페이지로 진행 (오류 ${errorCount}/${MAX_ERROR_COUNT})`);
      await new Promise((resolve) => setTimeout(resolve, 500)); // 오류 후 더 길게 대기
    }
  }

  console.log(`총 ${allItems.length}개 항목 조회 완료`);
  return allItems;
}
