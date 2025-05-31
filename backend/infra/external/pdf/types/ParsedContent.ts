// PDF 파싱 결과 타입 정의

/**
 * 효능효과 정보
 */
export interface EffectInfo {
  mainEffect: string; // 주요 효능
  detailedEffect: string; // 상세 효능
  targetDisease: string[]; // 대상 질병 목록
  therapeuticClass: string; // 치료 분류
}

/**
 * 용법용량 정보
 */
export interface UsageInfo {
  dosage: string; // 용량
  frequency: string; // 복용 횟수
  duration: string; // 복용 기간
  administration: string; // 복용법 (식전/식후 등)
  specialInstructions: string; // 특별 지시사항
  ageSpecificDosage: {
    adult: string; // 성인용량
    child: string; // 소아용량
    elderly: string; // 고령자용량
  };
}

/**
 * 주의사항 정보
 */
export interface CautionInfo {
  contraindications: string[]; // 금기사항
  warnings: string[]; // 경고사항
  precautions: string[]; // 주의사항
  sideEffects: string[]; // 부작용
  interactions: string[]; // 상호작용
  pregnancyWarning: string; // 임신 관련 경고
  childrenWarning: string; // 어린이 관련 경고
  elderlyWarning: string; // 고령자 관련 경고
}

/**
 * 전체 PDF 파싱 결과
 */
export interface ParsedMedicineContent {
  effect?: EffectInfo;
  usage?: UsageInfo;
  caution?: CautionInfo;
  parsedAt: Date; // 파싱 시점
  docIds: {
    effectDocId?: string;
    usageDocId?: string;
    cautionDocId?: string;
  };
}

/**
 * PDF 파싱 오류 정보
 */
export interface PdfParsingError {
  docId: string;
  errorType: 'DOWNLOAD_FAILED' | 'PARSE_FAILED' | 'INVALID_FORMAT';
  message: string;
  timestamp: Date;
} 