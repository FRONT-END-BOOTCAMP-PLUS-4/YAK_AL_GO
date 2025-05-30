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
 * 백엔드 CATEGORY_KEYWORDS와 일치하도록 수정
 */
export const CATEGORY_RULES: CategoryRule[] = [
  {
    id: 'pain',
    display: '진통제',
    icon: '/mediCategory/Painkiller.svg',
    color: 'red',
    keywords: ['해열'], // 백엔드와 일치: "[114]해열.진통.소염제"
    priority: 1,
  },
  {
    id: 'cardio',
    display: '심혈관약',
    icon: '/mediCategory/Cardiovascular.svg',
    color: 'blue',
    keywords: ['혈압'], // 백엔드와 일치: "[214]혈압강하제"
    priority: 2,
  },
  {
    id: 'diabetes',
    display: '당뇨약',
    icon: '/mediCategory/Diabetes.svg',
    color: 'purple',
    keywords: ['대사'], // 백엔드와 일치: "[264]대사성의약품"
    priority: 3,
  },
  {
    id: 'neuro',
    display: '신경약',
    icon: '/mediCategory/Nervous-system.svg',
    color: 'indigo',
    keywords: ['신경'], // 백엔드와 일치: "[117]중추신경계용약"
    priority: 4,
  },
  {
    id: 'antibiotic',
    display: '항생제',
    icon: '/mediCategory/Antibiotics.svg',
    color: 'green',
    keywords: ['그람'], // 백엔드와 일치: "[611]그람양성균용제"
    priority: 5,
  },
  {
    id: 'digestive',
    display: '소화제',
    icon: '/mediCategory/Digestive-aid.svg',
    color: 'orange',
    keywords: ['건위소화제'], // 백엔드와 일치: "[232]건위소화제"
    priority: 6,
  },
  {
    id: 'respiratory',
    display: '감기약',
    icon: '/mediCategory/Cold medicine.svg',
    color: 'cyan',
    keywords: ['진해'], // 백엔드와 일치: "[131]진해거담제"
    priority: 7,
  },
  {
    id: 'allergy',
    display: '알레르기약',
    icon: '/mediCategory/Allergy-medicine.svg',
    color: 'pink',
    keywords: ['히스타민'], // 백엔드와 일치: "[441]항히스타민제"
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

  // 2. "/" 문자 제거 (슬래시로 구분된 이름들 정리)
  formatted = formatted.replace(/\/.*$/, ''); // 첫 번째 "/" 이후 모든 내용 제거
  formatted = formatted.replace(/\//g, ''); // 남은 "/" 문자들 제거

  // 3. 용량 정보 간소화
  formatted = formatted.replace(/(\d+)(밀리그람|밀리그램|mg|그람|g)/gi, '');

  // 4. 불필요한 제형 단어 제거
  const unnecessaryWords = ['서방정', 'CR정', 'ER정', '필름코팅정', '장용정', '캡슐형', '정제'];
  for (const word of unnecessaryWords) {
    formatted = formatted.replace(new RegExp(word, 'gi'), '');
  }

  // 5. 최대 길이 제한 (15자)
  if (formatted.length > 15) {
    formatted = `${formatted.substring(0, 12)}...`;
  }

  // 6. 공백 정리
  return formatted.trim().replace(/\s+/g, ' ');
}

/**
 * 제조사명 간소화
 * @param entpName 원본 제조사명 "한국존슨앤드존슨판매(유)"
 * @returns 원본 제조사명 그대로 반환
 */
export function formatManufacturer(entpName: string): string {
  if (!entpName) return '';

  // 원본 제조사명 그대로 반환
  return entpName.trim();
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
  displayName: string; // 실제 표시될 의약품명 (중복 시 원본 사용)
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
    displayName: formatMedicineName(medicine.itemName),
  };
}

/**
 * 중복 의약품명 처리 - 중복 시 원본 이름 사용
 * @param medicines 의약품 목록
 * @returns 중복 처리된 의약품 목록
 */
export function processDisplayNames(
  medicines: {
    itemSeq: string;
    itemName: string;
    entpName?: string;
    classNo?: string;
  }[]
): SimplifiedMedicine[] {
  // 1. 기본 포맷팅 적용
  const formattedMedicines = medicines.map((medicine) => formatMedicineInfo(medicine));

  // 2. 간소화된 이름별로 그룹화
  const nameGroups = formattedMedicines.reduce(
    (groups, medicine) => {
      const name = medicine.shortName;
      if (!groups[name]) {
        groups[name] = [];
      }
      groups[name].push(medicine);
      return groups;
    },
    {} as Record<string, SimplifiedMedicine[]>
  );

  // 3. 중복된 이름들은 원본 이름 사용
  for (const [, group] of Object.entries(nameGroups)) {
    if (group.length > 1) {
      // 중복된 경우 원본 이름 사용
      for (const medicine of group) {
        medicine.displayName = medicine.originalName;
      }
    }
  }

  return formattedMedicines;
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

// ==================== 이미지 선택 함수 ====================

/**
 * 연고/크림 전용 이미지
 */
const OINTMENT_IMAGE = '/mediImg/Ointment_Tube.png';

/**
 * 일반 의약품 이미지 목록 (연고/크림 제외)
 */
const GENERAL_MEDICINE_IMAGES = [
  '/mediImg/Blister_Pack.png',
  '/mediImg/HDPE_Bottle.png',
  '/mediImg/Heart_Capsule.png',
  '/mediImg/Oval_Capsule.png',
  '/mediImg/Pill_Bottle.png',
  '/mediImg/Two-Piece_Capsule.png',
];

/**
 * chart 정보를 확인하여 연고/크림 여부 판단
 * @param chart 의약품 성상 정보
 * @returns 연고/크림 여부
 */
function isOintmentOrCream(chart?: string): boolean {
  if (!chart) return false;

  const lowerChart = chart.toLowerCase();
  return lowerChart.includes('로션') || lowerChart.includes('크림');
}

/**
 * 의약품 정보를 기반으로 적절한 이미지 선택
 * chart에 "로션" 또는 "크림"이 포함되면 연고 이미지, 그 외에는 랜덤 이미지
 * @param itemSeq 의약품 고유 ID
 * @param chart 의약품 성상 정보
 * @returns 선택된 이미지 경로
 */
export function selectMedicineImage(itemSeq: string, chart?: string): string {
  // 연고/크림인 경우 전용 이미지 사용
  if (isOintmentOrCream(chart)) {
    return OINTMENT_IMAGE;
  }

  // 일반 의약품은 ID 기반으로 랜덤 선택 (일관성 보장)
  const numericPart = itemSeq.replace(/\D/g, ''); // 숫자만 추출
  const hash = numericPart ? Number.parseInt(numericPart, 10) : 0;

  // 일반 이미지 개수로 나눈 나머지로 인덱스 결정
  const imageIndex = hash % GENERAL_MEDICINE_IMAGES.length;

  return GENERAL_MEDICINE_IMAGES[imageIndex];
}
