// 의약품 데이터 저장 및 조회 기능 정의
import type { Medicine } from '@/backend/domain/entities/Medicine';

/**
 * 의약품 목록 조회 요청 인터페이스
 */
export interface MediListRequest {
  limit: number; // 한 번에 로드할 데이터 개수
  page?: number; // 페이지 번호 (페이지네이션용)
  search?: string; // 검색어
  category?: string; // 카테고리 필터
  sortBy?: 'name' | 'reviews' | 'name_asc' | 'name_desc'; // 정렬 기준 (방향 포함)
  cursor?: string; // 커서 (무한스크롤용)
}

/**
 * 의약품 목록 조회 결과 인터페이스
 */
export interface MediListResult {
  medicines: Medicine[]; // 의약품 목록
  hasMore: boolean; // 더 많은 데이터 존재 여부
  nextCursor?: string; // 다음 페이지 커서
  totalCount: number; // 전체 데이터 개수 (페이지네이션용)
}

/**
 * 의약품 Repository 인터페이스
 * 데이터 접근 계층의 추상화
 */
export interface MediRepository {
  /**
   * 의약품 목록 조회
   * @param request 조회 조건
   * @returns 의약품 목록과 메타데이터
   */
  findAll(request: MediListRequest): Promise<MediListResult>;

  /**
   * 개별 의약품 상세 조회 (상세페이지용)
   * @param itemSeq 의약품 일련번호
   * @returns 의약품 상세 정보 또는 null
   */
  findByItemSeq(itemSeq: string): Promise<Medicine | null>;
}
