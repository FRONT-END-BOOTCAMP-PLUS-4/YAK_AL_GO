/**
 * 의약품 데이터 포맷팅 및 카테고리 매핑 유틸리티
 * 126개의 복잡한 CLASS_NO를 8개의 사용자 친화적 카테고리로 간소화
 */

// ==================== 타입 정의 ====================

export interface CategoryInfo {
  id: string; // 카테고리 고유 ID
  display: string; // 사용자에게 표시될 이름
  icon: string; // 이모지 아이콘
  color: string; // Tailwind 색상 클래스
  original: string; // 원본 CLASS_NO
}

export interface CategoryRule {
  id: string;
  display: string;
  icon: string;
  color: string;
  keywords: string[]; // 매칭할 키워드 배열
  priority: number; // 매칭 우선순위 (낮을수록 높은 우선순위)
}

export interface MainCategory {
  key: string;
  label: string;
  icon: string;
  count?: number;
}

// ==================== 카테고리 규칙 정의 ====================

/**
 * 카테고리 매핑 규칙 (실제 데이터 분석 결과 기반)
 */
export const CATEGORY_RULES: CategoryRule[] = [
  {
    id: 'pain',
    display: '진통제',
    icon: '/mediCategory/Painkiller.svg',
    color: 'red',
    keywords: ['해열', '진통', '소염'],
    priority: 1,
  },
  {
    id: 'cardio',
    display: '심혈관약',
    icon: '/mediCategory/Cardiovascular.svg',
    color: 'blue',
    keywords: ['혈압', '동맥', '순환', '강압'],
    priority: 2,
  },
  {
    id: 'diabetes',
    display: '당뇨약',
    icon: '/mediCategory/Diabetes.svg',
    color: 'purple',
    keywords: ['당뇨', '대사'],
    priority: 3,
  },
  {
    id: 'neuro',
    display: '신경약',
    icon: '/mediCategory/Nervous-system.svg',
    color: 'indigo',
    keywords: ['신경', '정신', '전간', '중추'],
    priority: 4,
  },
  {
    id: 'antibiotic',
    display: '항생제',
    icon: '/mediCategory/Antibiotics.svg',
    color: 'green',
    keywords: ['그람', '화학요법', '종양', '항악성'],
    priority: 5,
  },
  {
    id: 'digestive',
    display: '소화제',
    icon: '/mediCategory/Digestive-aid.svg',
    color: 'orange',
    keywords: ['소화', '궤양', '간장', '위장'],
    priority: 6,
  },
  {
    id: 'respiratory',
    display: '감기약',
    icon: '/mediCategory/Cold medicine.svg',
    color: 'cyan',
    keywords: ['진해', '거담', '호흡'],
    priority: 7,
  },
  {
    id: 'allergy',
    display: '알레르기약',
    icon: '/mediCategory/Allergy-medicine.svg',
    color: 'pink',
    keywords: ['히스타민', '알레르기'],
    priority: 8,
  },
];

/**
 * 메인 카테고리 정의 (UI 탭용)
 */
export const MAIN_CATEGORIES: MainCategory[] = [
  { key: 'all', label: '전체', icon: '🏥' },
  { key: 'pain', label: '진통제', icon: '/mediCategory/Painkiller.svg' },
  { key: 'cardio', label: '심혈관약', icon: '/mediCategory/Cardiovascular.svg' },
  { key: 'diabetes', label: '당뇨약', icon: '/mediCategory/Diabetes.svg' },
  { key: 'neuro', label: '신경약', icon: '/mediCategory/Nervous-system.svg' },
  { key: 'antibiotic', label: '항생제', icon: '/mediCategory/Antibiotics.svg' },
  { key: 'digestive', label: '소화제', icon: '/mediCategory/Digestive-aid.svg' },
  { key: 'respiratory', label: '감기약', icon: '/mediCategory/Cold medicine.svg' },
  { key: 'allergy', label: '알레르기약', icon: '/mediCategory/Allergy-medicine.svg' },
];

// ==================== 카테고리 매핑 함수 ====================

/**
 * 기본 카테고리 반환
 */
function getDefaultCategory(): CategoryInfo {
  return {
    id: 'other',
    display: '기타',
    icon: '💊',
    color: 'gray',
    original: '',
  };
}

/**
 * CLASS_NO를 기반으로 스마트 카테고리 매핑
 * @param classNo 원본 분류번호 "[214]혈압강하제"
 * @returns 사용자 친화적 카테고리 정보
 */
export function mapClassNoToCategory(classNo: string): CategoryInfo {
  if (!classNo) return getDefaultCategory();

  // 우선순위별로 정렬된 규칙으로 매칭
  const sortedRules = CATEGORY_RULES.sort((a, b) => a.priority - b.priority);

  for (const rule of sortedRules) {
    if (rule.keywords.some((keyword) => classNo.includes(keyword))) {
      return {
        id: rule.id,
        display: rule.display,
        icon: rule.icon,
        color: rule.color,
        original: classNo,
      };
    }
  }

  return {
    ...getDefaultCategory(),
    original: classNo,
  };
}

// ==================== 의약품명 포맷팅 함수 ====================

/**
 * 의약품명 간소화
 * @param itemName 원본 의약품명 "니페디온CR서방정40밀리그람(니페디핀)"
 * @returns 간소화된 의약품명 "니페디온CR"
 */
export function formatMedicineName(itemName: string): string {
  if (!itemName) return '';

  let formatted = itemName;

  // 1. 괄호 안 성분명 제거 (마지막 괄호만)
  formatted = formatted.replace(/\([^)]*\)$/, '');

  // 2. 용량 정보 간소화
  formatted = formatted.replace(/(\d+)(밀리그람|밀리그램|mg|그람|g)/gi, '');

  // 3. 불필요한 제형 단어 제거
  const unnecessaryWords = ['서방정', 'CR정', 'ER정', '필름코팅정', '장용정', '캡슐형', '정제'];
  for (const word of unnecessaryWords) {
    formatted = formatted.replace(new RegExp(word, 'gi'), '');
  }

  // 4. 최대 길이 제한 (15자)
  if (formatted.length > 15) {
    formatted = `${formatted.substring(0, 12)}...`;
  }

  // 5. 공백 정리
  return formatted.trim().replace(/\s+/g, ' ');
}

/**
 * 제조사명 간소화
 * @param entpName 원본 제조사명 "한국존슨앤드존슨판매(유)"
 * @returns 간소화된 제조사명 "한국존슨앤드존슨"
 */
export function formatManufacturer(entpName: string): string {
  if (!entpName) return '';

  let formatted = entpName;

  // 불필요한 법인 표시 제거
  const companyTerms = [
    '(주)',
    '(유)',
    '주식회사',
    '유한회사',
    '판매',
    '제약',
    'Co.',
    'Ltd.',
    'Inc.',
  ];
  for (const term of companyTerms) {
    formatted = formatted.replace(new RegExp(term, 'gi'), '');
  }

  // 최대 길이 제한 (12자)
  if (formatted.length > 12) {
    formatted = `${formatted.substring(0, 9)}...`;
  }

  return formatted.trim();
}

// ==================== 통합 포맷팅 함수 ====================

/**
 * 간소화된 의약품 정보 인터페이스
 */
export interface SimplifiedMedicine {
  itemSeq: string;
  shortName: string; // 간소화된 의약품명
  shortManufacturer: string; // 간소화된 제조사명
  category: CategoryInfo; // 스마트 카테고리 정보
  originalName: string; // 원본 의약품명 (툴팁용)
  originalManufacturer: string; // 원본 제조사명 (툴팁용)
  originalCategory: string; // 원본 카테고리 (툴팁용)
}

/**
 * 의약품 전체 정보 간소화
 * @param medicine 원본 의약품 정보
 * @returns 간소화된 의약품 정보
 */
export function formatMedicineInfo(medicine: {
  itemSeq: string;
  itemName: string;
  entpName?: string;
  classNo?: string;
}): SimplifiedMedicine {
  const category = mapClassNoToCategory(medicine.classNo || '');

  return {
    itemSeq: medicine.itemSeq,
    shortName: formatMedicineName(medicine.itemName),
    shortManufacturer: formatManufacturer(medicine.entpName || ''),
    category: category,
    originalName: medicine.itemName,
    originalManufacturer: medicine.entpName || '',
    originalCategory: medicine.classNo || '',
  };
}

// ==================== 카테고리 키 매핑 ====================

/**
 * 카테고리 키 매핑 (기존 시스템과 호환)
 */
export const CATEGORY_KEY_MAP: Record<string, string> = {
  all: '전체',
  pain: '진통제',
  cardio: '심혈관약',
  diabetes: '당뇨약',
  neuro: '신경약',
  antibiotic: '항생제',
  digestive: '소화제',
  respiratory: '감기약',
  allergy: '알레르기약',

  // 기존 시스템 호환
  painkillers: '진통제',
  cold: '감기약',
};

/**
 * 카테고리별 통계 (실제 데이터 기반)
 */
export const CATEGORY_STATS: Record<string, number> = {
  pain: 2614, // 진통제
  cardio: 4899, // 심혈관약
  diabetes: 2432, // 당뇨약
  neuro: 2444, // 신경약
  antibiotic: 1897, // 항생제
  digestive: 1657, // 소화제
  respiratory: 607, // 감기약
  allergy: 797, // 알레르기약
};
