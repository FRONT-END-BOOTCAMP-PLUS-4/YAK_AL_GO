// 의약품 상세 정보 DTO

import type { ParsedMedicineContent } from '@/backend/infra/external/pdf/types/ParsedContent';

/**
 * 의약품 PDF 문서 정보
 */
export interface MediDocumentInfo {
  effectDocId: string | null; // 효능효과 문서 ID
  usageDocId: string | null; // 용법용량 문서 ID
  cautionDocId: string | null; // 주의사항 문서 ID
  insertFile: string | null; // 첨부파일
}

/**
 * 의약품 주의사항 정보
 */
export interface MediWarningInfo {
  typeCode: string | null; // 제형코드
  typeName: string | null; // 제형명 (임부금기, 첨가제주의 등)
  etcOtcCode: string | null; // 전문/일반의약품 구분
}

/**
 * 의약품 보관/포장 정보
 */
export interface MediStorageInfo {
  storageMethod: string | null; // 저장방법
  validTerm: string | null; // 유효기간
  packUnit: string | null; // 포장단위
}

/**
 * 의약품 식별 정보
 */
export interface MediIdentificationInfo {
  barCode: string | null; // 바코드
  ediCode: string | null; // EDI 코드
  classNo: string | null; // 분류번호
}

/**
 * 의약품 기타 상세 정보
 */
export interface MediAdditionalInfo {
  bizrno: string | null; // 제조업체 사업자등록번호
  reexamDate: Date | null; // 재심사일자
  reexamTarget: string | null; // 재심사대상
  cancelDate: Date | null; // 취소일자
  cancelName: string | null; // 취소사유
  changeDate: Date | null; // 변경일자
}

/**
 * 의약품 시스템 정보
 */
export interface MediSystemInfo {
  createdAt: Date | null; // 생성일시
  updatedAt: Date | null; // 수정일시
  itemPermitDate: Date | null; // 허가일자
}

/**
 * 의약품 상세 정보 응답 DTO
 * 기본 의약품 정보만 포함 (PDF 파싱 없음)
 */
export interface MediDetailDto {
  // 기본 식별 정보
  itemSeq: string; // 품목일련번호 (Primary Key)
  itemName: string; // 품목명
  entpName: string | null; // 업체명 (제조사)

  // 의약품 기본 정보
  chart: string | null; // 성상 (모양, 색깔 등)
  materialName: string | null; // 원료성분

  // 프론트엔드 호환성을 위한 추가 필드들
  etcOtcName?: string | null; // 전문/일반의약품 구분명
  storageMethod?: string | null; // 저장방법 (직접 매핑)
  validTerm?: string | null; // 유효기간 (직접 매핑)
  typeName?: string | null; // 제형명/주의사항 (임부금기, 첨가제주의 등)

  // PDF 문서 정보 (참고용)
  documents: MediDocumentInfo;

  // 주의사항 정보 (기본)
  warnings: MediWarningInfo;

  // 보관/포장 정보
  storage: MediStorageInfo;

  // 식별 정보
  identification: MediIdentificationInfo;

  // 기타 상세 정보
  additional: MediAdditionalInfo;

  // 시스템 정보
  system: MediSystemInfo;
}

/**
 * 의약품 상세 조회 요청 DTO
 */
export interface MediDetailRequestDto {
  itemSeq: string; // 품목일련번호
}

/**
 * 의약품 상세 조회 응답 DTO
 */
export interface MediDetailResponseDto {
  success: boolean;
  data?: MediDetailDto;
  error?: {
    code: string;
    message: string;
  };
}
