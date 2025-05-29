// 의약품 목록 조회 관련 DTO

/**
 * 의약품 기본 정보 DTO
 * 약 검색 페이지 카드에 표시할 정보
 */
export interface MediBasicDto {
  itemSeq: string; // 품목일련번호 (ITEM_SEQ) - 고유 식별자
  itemName: string; // 의약품명 (ITEM_NAME) - "타이레놀정500밀리그람(아세트아미노펜)"
  entpName: string; // 제조사 (ENTP_NAME) - "한국존슨앤드존슨판매(유)"
  classNo: string; // 분류 (CLASS_NO) - "[114]해열.진통.소염제"
  chart?: string; // 성상 (CHART) - "흰색의 장방형 필름코팅정제"
  materialName?: string; // 주성분 (MATERIAL_NAME) - "아세트아미노펜,,500,밀리그램,USP,"
  etcOtcCode?: string; // 전문/일반의약품 구분 (ETC_OTC_CODE)
}

/**
 * 의약품 목록 조회 요청 DTO
 */
export interface MediListRequestDto {
  limit: number; // 한 번에 로드할 데이터 개수 (기본 100)
  page?: number; // 페이지 번호 (기본 1, 페이지네이션용)
  search?: string; // 검색어 (의약품명, 성분, 제조사 검색)
  category?: string; // 카테고리 필터 ("전체" | "진통제" | "감기약" | "소화제" | "항생제")
  sortBy?: 'name' | 'reviews' | 'name_asc' | 'name_desc'; // 정렬 기준 (가나다순 오름차순/내림차순 | 리뷰 많은 순)
  cursor?: string; // 무한 스크롤용 커서 (마지막 itemSeq)
}

/**
 * 의약품 목록 조회 응답 DTO
 */
export interface MediListResponseDto {
  medicines: MediBasicDto[]; // 의약품 목록
  hasMore: boolean; // 더 많은 데이터 존재 여부
  nextCursor?: string; // 다음 페이지 커서
  totalCount: number; // 검색 결과 총 개수
}

/**
 * 카테고리 키워드 매핑
 * CLASS_NO 필드에서 키워드 검색으로 카테고리 필터링
 */
export const CATEGORY_KEYWORDS = {
  전체: null,
  진통제: '진통', // "[114]해열.진통.소염제" → "진통" 포함
  감기약: '해열', // 감기약 관련 → "해열" 포함
  소화제: '건위소화제', // 소화제 관련 → "건위소화제" 포함
  항생제: '그람양성', // 항생제 관련 → "그람양성" 포함
} as const;

/**
 * 카테고리 타입 정의
 */
export type CategoryType = keyof typeof CATEGORY_KEYWORDS;
