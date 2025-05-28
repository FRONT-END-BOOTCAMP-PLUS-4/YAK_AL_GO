// 의약품 데이터 저장 및 조회 기능 정의

import type { Medicine } from '@/backend/domain/entities/Medicine';

/**
 * 의약품 목록 조회 요청 정보
 */
export interface MediListRequest {
  limit: number; // 한 번에 로드할 데이터 개수 (기본 20)
  search?: string; // 검색어 (의약품명, 성분, 제조사 검색)
  category?: string; // 카테고리 필터 ("전체" | "진통제" | "감기약" | "소화제" | "항생제")
  sortBy?: 'name' | 'reviews'; // 정렬 기준 (가나다순 | 리뷰 많은 순)
  cursor?: string; // 무한 스크롤용 커서 (마지막 itemSeq)
}

/**
 * 의약품 목록 조회 응답 정보
 */
export interface MediListResult {
  medicines: Medicine[]; // 의약품 엔티티 목록
  hasMore: boolean; // 더 많은 데이터 존재 여부
  nextCursor?: string; // 다음 페이지 커서
  totalCount?: number; // 검색 결과 총 개수 (옵션)
}

/**
 * 의약품 Repository 인터페이스
 * 데이터 접근 계층의 추상화
 */
export interface MediRepository {
  /**
   * 의약품 목록 조회 (검색, 필터링, 정렬 지원)
   * @param request 조회 요청 정보
   * @returns 의약품 엔티티 목록과 메타데이터
   */
  findAll(request: MediListRequest): Promise<MediListResult>;
}
