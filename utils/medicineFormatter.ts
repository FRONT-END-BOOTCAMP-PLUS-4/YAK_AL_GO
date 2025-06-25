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

// ==================== 병명-약 매핑 데이터 ====================

/**
 * 병명-약 매핑 데이터 (주요 질병/증상별 대표 약물)
 * 실제 의약품 데이터와 연동하여 검색 시 활용
 */
export const DISEASE_MEDICINE_MAP: Record<string, string[]> = {
  // 진통/해열 관련
  '두통': ['타이레놀', '아스피린', '이부프로펜', '아세트아미노펜', '파라세타몰'],
  '편두통': ['이미트렉스', '리자트립탄', '수마트립탄', '조미트립탄'],
  '치통': ['아스피린', '이부프로펜', '아세트아미노펜', '타이레놀'],
  '관절통': ['이부프로펜', '나프록센', '디클로페낙', '멜록시캄'],
  '요통': ['이부프로펜', '나프록센', '디클로페낙', '아세트아미노펜'],
  '생리통': ['이부프로펜', '나프록센', '메페남산', '아세트아미노펜'],
  '근육통': ['이부프로펜', '나프록센', '디클로페낙', '아세트아미노펜'],
  '신경통': ['가바펜틴', '프레가발린', '카르바마제핀', '아미트립틸린'],
  
  // 감기/호흡기 관련
  '감기': ['판콜에이', '타이레놀', '아스피린', '이부프로펜'],
  '독감': ['타미플루', '리렌자', '타이레놀', '이부프로펜'],
  '기침': ['벤사이클린', '코데인', '덱스트로메토르판', '구아이페네신'],
  '목아픔': ['벤사이클린', '아스피린', '아세트아미노펜', '이부프로펜'],
  '열': ['타이레놀', '아스피린', '이부프로펜', '아세트아미노펜'],
  '코막힘': ['수도에드', '페닐에프린', '슈도에페드린', '옥시메타졸린'],
  '가래': ['구아이페네신', '브로멜레인', 'N-아세틸시스테인', '암브록솔'],
  
  // 소화기 관련
  '소화불량': ['가스모틴', '베아제', '다이제스트', '소화제'],
  '위산과다': ['란소프라졸', '오메프라졸', '팜토프라졸', '에소메프라졸'],
  '위염': ['란소프라졸', '오메프라졸', '팜토프라졸', '수크랄페이트'],
  '위궤양': ['란소프라졸', '오메프라졸', '팜토프라졸', '미소프로스톨'],
  '설사': ['로페라마이드', '비스무트', '카올린', '펙틴'],
  '변비': ['듀푸락', '센나', '비스코딜', '락툴로오스'],
  '메스꺼움': ['메토클로프라마이드', '돔페리돈', '온단세트론', '그라니세트론'],
  '복통': ['부스코판', '메베린', '디시클로민', '히오스신'],
  '속쓰림': ['란소프라졸', '오메프라졸', '팜토프라졸', '알마겔'],
  
  // 알레르기 관련
  '알레르기': ['지르텍', '클라리틴', '알레그라', '베나드릴'],
  '콧물': ['수도에드', '페닐에프린', '슈도에페드린', '클로르페니라민'],
  '재채기': ['지르텍', '클라리틴', '알레그라', '베나드릴'],
  '가려움': ['베나드릴', '지르텍', '클라리틴', '알레그라'],
  '두드러기': ['베나드릴', '지르텍', '클라리틴', '알레그라'],
  '알레르기성비염': ['지르텍', '클라리틴', '알레그라', '베나드릴'],
  
  // 심혈관 관련
  '고혈압': ['암로디핀', '리시노프릴', '로사르탄', '메토프롤롤'],
  '협심증': ['니트로글리세린', '아스피린', '메토프롤롤', '아테놀롤'],
  '부정맥': ['아미오다론', '프로파페논', '메토프롤롤', '베라파밀'],
  '심부전': ['푸로세미드', '스피로놀락톤', '디곡신', '카르베딜롤'],
  
  // 당뇨 관련
  '당뇨': ['메트포르민', '글리메피리드', '피오글리타존', '시타글립틴'],
  '고혈당': ['메트포르민', '글리메피리드', '피오글리타존', '인슐린'],
  '당뇨병': ['메트포르민', '글리메피리드', '피오글리타존', '시타글립틴'],
  
  // 신경계 관련
  '불면증': ['졸피뎀', '조피클론', '라멜테온', '수보렉산트'],
  '우울증': ['플루옥세틴', '세르트랄린', '에스시탈로프람', '부프로피온'],
  '불안증': ['알프라졸람', '로라제팜', '디아제팜', '부스피론'],
  '간질': ['카르바마제핀', '발프로산', '라모트리진', '레베티라세탐'],
  '파킨슨병': ['레보도파', '카르비도파', '프라미펙솔', '로피니롤'],
  '치매': ['도네페질', '리바스티그민', '갈란타민', '메만틴'],
  
  // 항생제 관련
  '세균감염': ['아목시실린', '세팔렉신', '독시사이클린', '아지트로마이신'],
  '폐렴': ['아목시실린', '독시사이클린', '아지트로마이신', '레보플록사신'],
  '요로감염': ['시프로플록사신', '트리메토프림', '니트로푸란토인', '세팔렉신'],
  '피부감염': ['세팔렉신', '독시사이클린', '클린다마이신', '아목시실린'],
  
  // 피부 관련
  '습진': ['하이드로코티손', '베타메타손', '트리암시놀론', '덱사메타손'],
  '아토피': ['하이드로코티손', '베타메타손', '트리암시놀론', '덱사메타손'],
  '여드름': ['벤조일퍼옥사이드', '클린다마이신', '아다팔렌', '트레티노인'],
  '무좀': ['클로트리마졸', '미코나졸', '케토코나졸', '테르비나핀'],
  
  // 기타
  '비타민': ['비타민C', '비타민D', '비타민B', '종합비타민'],
  '철분': ['철분제', '페로설페이트', '페로글리시네이트', '철분보충제'],
  '칼슘': ['칼슘제', '칼슘카보네이트', '칼슘시트레이트', '칼슘보충제'],
  '오메가3': ['오메가3', 'EPA', 'DHA', '어유'],
  '프로바이오틱스': ['락토바실러스', '비피도박테리움', '프로바이오틱스', '유산균'],
};

/**
 * 병명으로 약 검색 시 사용할 키워드 매핑
 */
export const DISEASE_KEYWORDS: Record<string, string[]> = {
  '두통': ['두통', '머리아픔', '편두통', '긴장성두통', '편두통'],
  '감기': ['감기', '독감', '상기도감염', '호흡기감염', '독감'],
  '기침': ['기침', '마른기침', '가래기침', '천식', '기침증'],
  '소화불량': ['소화불량', '소화장애', '위장장애', '소화기장애', '소화안됨'],
  '알레르기': ['알레르기', '알레르기성', '알레르기반응', '과민반응', '알레르기성비염'],
  '고혈압': ['고혈압', '혈압상승', '고혈압성', '혈압강하', '고혈압증'],
  '당뇨': ['당뇨', '당뇨병', '고혈당', '혈당상승', '당뇨병'],
  '불면증': ['불면증', '수면장애', '잠못들기', '수면부족', '잠안옴'],
  '세균감염': ['세균감염', '박테리아감염', '감염증', '화농성감염', '감염'],
  '치통': ['치통', '이빨아픔', '치아통증', '치통증'],
  '관절통': ['관절통', '관절아픔', '관절염', '관절통증'],
  '요통': ['요통', '허리아픔', '허리통증', '요통증'],
  '생리통': ['생리통', '생리아픔', '월경통', '생리통증'],
  '근육통': ['근육통', '근육아픔', '근육통증', '근육피로'],
  '신경통': ['신경통', '신경아픔', '신경통증', '신경성통증'],
  '목아픔': ['목아픔', '인후통', '목통증', '인후염'],
  '열': ['열', '발열', '고열', '열증'],
  '코막힘': ['코막힘', '비폐색', '코막힘증', '비강폐색'],
  '가래': ['가래', '담', '담증', '가래증'],
  '위산과다': ['위산과다', '위산분비과다', '위산증', '위산과다증'],
  '위염': ['위염', '위장염', '위염증', '위장염증'],
  '위궤양': ['위궤양', '위궤양증', '위궤양성질환', '위궤양증'],
  '설사': ['설사', '설사증', '장염', '설사질환'],
  '변비': ['변비', '변비증', '변비질환', '배변장애'],
  '메스꺼움': ['메스꺼움', '구역질', '메스꺼움증', '구역질증'],
  '복통': ['복통', '배아픔', '복통증', '배통증'],
  '속쓰림': ['속쓰림', '위산역류', '속쓰림증', '위산역류증'],
  '콧물': ['콧물', '비루', '콧물증', '비루증'],
  '재채기': ['재채기', '재채기증', '재채기질환', '재채기증'],
  '가려움': ['가려움', '소양증', '가려움증', '소양증'],
  '두드러기': ['두드러기', '두드러기증', '두드러기질환', '두드러기증'],
  '협심증': ['협심증', '협심증질환', '협심증증', '협심증'],
  '부정맥': ['부정맥', '부정맥증', '부정맥질환', '부정맥증'],
  '심부전': ['심부전', '심부전증', '심부전질환', '심부전증'],
  '우울증': ['우울증', '우울증질환', '우울증증', '우울증'],
  '불안증': ['불안증', '불안증질환', '불안증증', '불안증'],
  '간질': ['간질', '간질증', '간질질환', '간질증'],
  '파킨슨병': ['파킨슨병', '파킨슨병질환', '파킨슨병증', '파킨슨병'],
  '치매': ['치매', '치매증', '치매질환', '치매증'],
  '폐렴': ['폐렴', '폐렴증', '폐렴질환', '폐렴증'],
  '요로감염': ['요로감염', '요로감염증', '요로감염질환', '요로감염증'],
  '피부감염': ['피부감염', '피부감염증', '피부감염질환', '피부감염증'],
  '습진': ['습진', '습진증', '습진질환', '습진증'],
  '아토피': ['아토피', '아토피증', '아토피질환', '아토피증'],
  '여드름': ['여드름', '여드름증', '여드름질환', '여드름증'],
  '무좀': ['무좀', '무좀증', '무좀질환', '무좀증'],
};

/**
 * 병명으로 검색 가능한지 확인
 * @param searchTerm 검색어
 * @returns 병명 검색 가능 여부
 */
export function isDiseaseSearch(searchTerm: string): boolean {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  // 직접적인 병명 매칭
  if (DISEASE_MEDICINE_MAP[normalizedTerm]) {
    return true;
  }
  
  // 키워드 기반 매칭
  for (const [disease, keywords] of Object.entries(DISEASE_KEYWORDS)) {
    if (keywords.some(keyword => normalizedTerm.includes(keyword))) {
      return true;
    }
  }
  
  return false;
}

/**
 * 병명으로 검색 시 사용할 약물 키워드 추출
 * @param searchTerm 검색어
 * @returns 약물 키워드 배열
 */
export function getMedicineKeywordsForDisease(searchTerm: string): string[] {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  // 직접적인 병명 매칭
  if (DISEASE_MEDICINE_MAP[normalizedTerm]) {
    return DISEASE_MEDICINE_MAP[normalizedTerm];
  }
  
  // 키워드 기반 매칭
  for (const [disease, keywords] of Object.entries(DISEASE_KEYWORDS)) {
    if (keywords.some(keyword => normalizedTerm.includes(keyword))) {
      return DISEASE_MEDICINE_MAP[disease] || [];
    }
  }
  
  return [];
}
