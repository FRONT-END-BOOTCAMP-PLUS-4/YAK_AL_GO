import axios from 'axios';

/**
 * 노인주의 정보 데이터 인터페이스
 * 공공데이터포털 DUR 노인주의 API 응답 데이터 구조 정의
 */
export interface ElderlyWarningDataInterface {
  TYPE_NAME?: string; // 타입명 (노인주의)
  MIX_TYPE?: string; // 단일/복합 구분
  INGR_CODE?: string; // 성분 코드
  INGR_ENG_NAME?: string; // 성분 영문명
  INGR_NAME?: string; // 성분명
  MIX_INGR?: string; // 혼합 성분
  FORM_NAME?: string; // 제형명
  ITEM_SEQ: string; // 품목일련번호
  ITEM_NAME: string; // 품목명
  ITEM_PERMIT_DATE?: string; // 허가일자
  ENTP_NAME?: string; // 업체명
  CHART?: string; // 성상
  CLASS_CODE?: string; // 분류 코드
  CLASS_NAME?: string; // 분류명
  ETC_OTC_NAME?: string; // 전문/일반 구분명
  MAIN_INGR?: string; // 주성분
  NOTIFICATION_DATE?: string; // 고시일자
  PROHBT_CONTENT?: string; // 금기내용
  REMARK?: string; // 비고
  INGR_ENG_NAME_FULL?: string; // 성분 영문명 전체
  CHANGE_DATE?: string; // 변경일자
}

/**
 * 노인주의 API 응답 구조 인터페이스
 */
export interface ElderlyWarningApiResponseInterface {
  header: {
    resultCode: string; // 결과코드 (00: 성공)
    resultMsg: string; // 결과메시지
  };
  body: {
    totalCount: number; // 전체 데이터 건수
    items: ElderlyWarningDataInterface[]; // 실제 데이터 배열
    numOfRows: number; // 한 페이지 결과 수
    pageNo: number; // 페이지 번호
  };
}

/**
 * 노인주의 정보 조회 서비스 클래스
 * 공공데이터포털 DUR 노인주의 API와 연동하여 고령자 주의 정보를 관리
 */
class ElderlyWarningService {
  // 공공데이터포털 DUR 노인주의 API 엔드포인트
  private readonly API_BASE_URL =
    'https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getOdsnAtentInfoList03';

  // API 인증키 (공공데이터포털에서 발급)
  private readonly API_KEY: string;

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

    this.API_KEY = apiKey;
    console.log('노인주의 서비스 초기화 완료');
  }

  /**
   * 특정 의약품의 노인주의 정보 조회
   * @param itemSeq 품목일련번호
   * @returns 노인주의 정보 배열
   */
  async getElderlyWarningByItemSeq(itemSeq: string): Promise<ElderlyWarningDataInterface[]> {
    try {
      console.log(`노인주의 정보 조회 시작: ${itemSeq}`);

      const response = await this.fetchElderlyWarningData(1, 100, itemSeq);

      if (!response.body.items || response.body.items.length === 0) {
        console.log(`노인주의 정보 없음: ${itemSeq}`);
        return [];
      }

      console.log(`노인주의 정보 조회 완료: ${response.body.items.length}건`);
      return response.body.items;
    } catch (error) {
      console.error(`노인주의 정보 조회 오류 (${itemSeq}):`, error);
      return [];
    }
  }

  /**
   * 의약품명으로 노인주의 정보 조회
   * @param itemName 의약품명
   * @returns 노인주의 정보 배열
   */
  async getElderlyWarningByItemName(itemName: string): Promise<ElderlyWarningDataInterface[]> {
    try {
      console.log(`노인주의 정보 조회 시작 (약품명): ${itemName}`);

      const response = await this.fetchElderlyWarningData(1, 100, undefined, itemName);

      if (!response.body.items || response.body.items.length === 0) {
        console.log(`노인주의 정보 없음 (약품명): ${itemName}`);
        return [];
      }

      console.log(`노인주의 정보 조회 완료 (약품명): ${response.body.items.length}건`);
      return response.body.items;
    } catch (error) {
      console.error(`노인주의 정보 조회 오류 (약품명: ${itemName}):`, error);
      return [];
    }
  }

  /**
   * DUR 노인주의 API 호출
   * @param pageNo 조회할 페이지 번호
   * @param numOfRows 한 페이지당 조회할 데이터 건수
   * @param itemSeq 품목일련번호 (선택사항)
   * @param itemName 의약품명 (선택사항)
   * @returns API 응답 데이터
   */
  private async fetchElderlyWarningData(
    pageNo: number,
    numOfRows: number,
    itemSeq?: string,
    itemName?: string
  ): Promise<ElderlyWarningApiResponseInterface> {
    try {
      // API 요청 파라미터 설정
      const params: Record<string, string> = {
        serviceKey: this.API_KEY,
        pageNo: pageNo.toString(),
        numOfRows: numOfRows.toString(),
        type: 'json',
      };

      // 선택적 파라미터 추가
      if (itemSeq) {
        params.itemSeq = itemSeq;
      }
      if (itemName) {
        params.itemName = itemName;
      }

      console.log(`노인주의 API 호출: 페이지 ${pageNo}, 요청 건수 ${numOfRows}`);
      console.log('요청 파라미터:', JSON.stringify(params, null, 2));

      // HTTP GET 요청 실행
      const response = await axios.get(this.API_BASE_URL, {
        params,
        timeout: 30000, // 30초 타임아웃
        headers: {
          'User-Agent': 'DUR-ElderlyWarning-Service/1.0',
          Accept: 'application/json',
        },
      });

      // XML 에러 응답 처리
      if (
        typeof response.data === 'string' &&
        response.data.includes('<OpenAPI_ServiceResponse>')
      ) {
        console.error('API에서 XML 에러 응답 반환:', response.data);
        throw new Error(`API에서 에러 응답을 반환했습니다: ${response.data}`);
      }

      const data = response.data as ElderlyWarningApiResponseInterface;

      // JSON 응답 구조 검증
      if (!data || !data.header) {
        console.error('예상과 다른 API 응답 구조:', data);
        throw new Error('API 응답 구조가 예상과 다릅니다.');
      }

      // API 결과 코드 확인
      if (data.header.resultCode !== '00') {
        console.error(`API 에러 코드: ${data.header.resultCode}`);
        console.error(`API 에러 메시지: ${data.header.resultMsg}`);
        throw new Error(`API 오류: ${data.header.resultMsg}`);
      }

      console.log(`노인주의 API 응답 성공: ${data.body.items?.length || 0}건 수신`);
      return data;
    } catch (error) {
      console.error('노인주의 API 호출 상세 에러:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      throw new Error(`노인주의 API 호출 실패: ${errorMessage}`);
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
}

export { ElderlyWarningService };
