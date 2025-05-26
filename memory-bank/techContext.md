# 기술 컨텍스트 - 약알고

## 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript (엄격 모드)
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Hooks + Context API
- **HTTP Client**: Axios (재구축 필요)
- **Form Handling**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js (Next.js API Routes)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **File Upload**: 미정 (추후 결정)

### Development Tools
- **Linter/Formatter**: Biome
- **Version Control**: Git
- **Package Manager**: npm
- **Environment**: Node.js 18+

### External APIs
- **지도**: 카카오 맵 API (예정)
- **의약품 정보**: 식약처 공공데이터 API (예정)
- **위치 서비스**: Geolocation API

## 프로젝트 구조

```
YAK_AL_GO/
├── app/                          # Next.js 13+ App Router
│   ├── (anon-user)/             # 비로그인 사용자 라우트
│   │   ├── medicines/           # 의약품 검색 (Mock 데이터 사용 중)
│   │   ├── map/                 # 약국 지도
│   │   └── qna/                 # Q&A 페이지
│   ├── (auth-user)/             # 로그인 사용자 라우트
│   │   ├── mypage/              # 마이페이지
│   │   └── community/           # 커뮤니티
│   ├── api/                     # API 라우트
│   │   ├── medicines/           # 의약품 API (구현됨)
│   │   ├── auth/                # 인증 API
│   │   ├── map/                 # 지도 API
│   │   └── qna/                 # Q&A API
│   ├── globals.css              # 전역 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 홈페이지
├── components/                   # 재사용 컴포넌트
│   ├── ui/                      # Shadcn/ui 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   └── common/                  # 공통 컴포넌트
├── lib/                         # 유틸리티 및 설정
│   ├── prisma.ts               # Prisma 클라이언트
│   ├── auth.ts                 # NextAuth 설정
│   ├── utils.ts                # 공통 유틸리티
│   └── api.ts                  # API 클라이언트 (삭제됨, 재구축 필요)
├── hooks/                       # 커스텀 훅
│   └── useMedicines.ts         # 의약품 훅 (삭제됨, 재구축 필요)
├── types/                       # TypeScript 타입 정의
├── prisma/                      # 데이터베이스 스키마
│   ├── schema.prisma           # Prisma 스키마
│   └── migrations/             # 마이그레이션 파일
├── memory-bank/                 # 프로젝트 문서
└── public/                      # 정적 파일
```

## 데이터베이스 설계

### 핵심 테이블
```sql
-- 사용자 관리
users (id, email, name, member_type, created_at, updated_at)

-- 의약품 정보 (식약처 데이터)
medicines (item_seq, item_name, entp_name, chart, material_name, etc_otc_name, class_name, main_item_ingr, formulation, item_image, print_front, print_back, drug_shape, color_class1, color_class2, line_front, line_back, leng_long, leng_short, thick, img_regist_ts, class_no, etc_otc_code, item_permit_date, form_code_name, mark_code_front_anal, mark_code_back_anal, mark_code_front_img, mark_code_back_img, item_eng_name, edi_code)

-- 약국 정보
pharmacies (id, name, address, phone, latitude, longitude, operating_hours, created_at, updated_at)

-- 재고 관리
inventories (id, pharmacy_id, medicine_id, stock_quantity, last_updated)

-- Q&A 시스템
qnas (id, user_id, title, content, category, status, created_at, updated_at)
answers (id, qna_id, user_id, content, is_expert, created_at, updated_at)

-- 커뮤니티
posts (id, user_id, title, content, category, created_at, updated_at)
comments (id, post_id, user_id, content, created_at, updated_at)

-- 개인 약물 관리
user_medicines (id, user_id, medicine_id, dosage, frequency, start_date, end_date, notes)
```

## 개발 환경 설정

### 필수 환경 변수 (재구축 필요)
```env
# 데이터베이스
DATABASE_URL="postgresql://username:password@localhost:5432/yakalgo"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# 외부 API
KAKAO_MAP_API_KEY="your-kakao-api-key"
MEDICINE_API_KEY="your-medicine-api-key"

# 기타
NODE_ENV="development"
```

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 데이터베이스 설정
npx prisma generate
npx prisma db push

# 개발 서버 실행
npm run dev
```

## 현재 기술적 상황

### 구현 완료 ✅
1. **프로젝트 기반 구조**
   - Next.js 15 + React 19 설정
   - TypeScript 엄격 모드 구성
   - Tailwind CSS + Shadcn/ui 디자인 시스템
   - Biome 린터/포매터 설정

2. **데이터베이스 설계**
   - 완전한 Prisma 스키마 정의
   - 관계형 데이터베이스 구조
   - 적절한 인덱싱 및 제약 조건

3. **API 라우트 기본 구조**
   - app/api/medicines/route.ts (GET/POST 구현)
   - 에러 처리 패턴
   - Zod 입력 검증

4. **UI/UX 기반**
   - 반응형 홈페이지
   - 기본 레이아웃 컴포넌트
   - 에러 처리 페이지

### 문제 상황 ❌
1. **API 인프라 부재**
   - `lib/api.ts`: API 클라이언트 삭제됨
   - `hooks/useMedicines.ts`: 커스텀 훅 삭제됨
   - `env.example`: 환경 설정 파일 부재
   - `app/api/medicines/[id]/route.ts`: 상세 조회 API 삭제됨

2. **Mock 데이터 의존성**
   - `app/(anon-user)/medicines/page.tsx`: 하드코딩된 Mock 데이터 사용
   - 실제 데이터베이스 연동 없음
   - API 호출 로직 부재

3. **환경 설정 부재**
   - 환경 변수 설정 파일 없음
   - 데이터베이스 연결 설정 부재
   - 외부 API 키 관리 체계 없음

### 진행 중 🔄
1. **의약품 API 재구축**
   - 삭제된 파일들 재생성 필요
   - Mock 데이터에서 실제 API 연동으로 전환
   - 환경 설정 및 데이터베이스 연결 구축

## 아키텍처 패턴

### 클린 아키텍처 적용
```
Presentation Layer (UI Components)
    ↓
Application Layer (Custom Hooks, Context)
    ↓
Domain Layer (Business Logic, Types)
    ↓
Infrastructure Layer (API, Database, External Services)
```

### API 설계 패턴
```typescript
// 표준 API 응답 구조
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}

// 에러 처리 패턴
try {
  const result = await apiCall();
  return NextResponse.json({ success: true, data: result });
} catch (error) {
  return NextResponse.json({ 
    success: false, 
    error: { code: 'INTERNAL_ERROR', message: 'Internal server error' } 
  }, { status: 500 });
}
```

### 상태 관리 패턴
```typescript
// 커스텀 훅 패턴 (재구축 필요)
const useMedicines = (query: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // API 호출 로직
  return { data, loading, error, refetch };
};
```

## 성능 최적화 전략

### 프론트엔드 최적화
1. **코드 분할**
   - 동적 임포트 활용
   - 페이지별 번들 분리
   - 컴포넌트 레벨 분할

2. **이미지 최적화**
   - Next.js Image 컴포넌트 사용
   - WebP 포맷 지원
   - 지연 로딩 구현

3. **상태 관리 최적화**
   - React.memo 활용
   - useMemo, useCallback 적절한 사용
   - 불필요한 리렌더링 방지

### 백엔드 최적화
1. **데이터베이스 최적화**
   - 적절한 인덱싱
   - 쿼리 최적화
   - 연결 풀링

2. **캐싱 전략**
   - Redis 도입 고려
   - API 응답 캐싱
   - 정적 자원 캐싱

3. **API 최적화**
   - 페이지네이션 구현
   - 압축 및 최적화
   - 레이트 리미팅

## 보안 고려사항

### 인증 및 권한
- NextAuth.js 기반 인증
- JWT 토큰 관리
- 역할 기반 접근 제어 (RBAC)

### 데이터 보안
- 입력 검증 (Zod 스키마)
- SQL 인젝션 방지 (Prisma ORM)
- XSS 방지 (React 기본 보호)

### API 보안
- CORS 설정
- 레이트 리미팅
- API 키 관리

## 테스트 전략

### 단위 테스트
- Jest + React Testing Library
- 컴포넌트 테스트
- 유틸리티 함수 테스트

### 통합 테스트
- API 엔드포인트 테스트
- 데이터베이스 연동 테스트
- 인증 플로우 테스트

### E2E 테스트
- Playwright 또는 Cypress
- 주요 사용자 플로우 테스트
- 크로스 브라우저 테스트

## 배포 및 인프라

### 배포 환경
- **개발**: Vercel 또는 Netlify
- **프로덕션**: AWS 또는 Google Cloud
- **데이터베이스**: PostgreSQL (Supabase 또는 AWS RDS)

### CI/CD 파이프라인
- GitHub Actions
- 자동 테스트 실행
- 자동 배포 (main 브랜치)

### 모니터링
- 에러 추적: Sentry
- 성능 모니터링: Vercel Analytics
- 로그 관리: CloudWatch 또는 LogRocket

## 즉시 해결해야 할 기술적 이슈

### 1. API 인프라 복구 (Critical)
```typescript
// lib/api.ts 재생성 필요
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
});

// 요청/응답 인터셉터
// 에러 처리 로직
// 타입 정의
```

### 2. 환경 설정 복구 (Critical)
```env
# env.example 재생성 필요
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
KAKAO_MAP_API_KEY=
```

### 3. Mock 데이터 제거 (High)
```typescript
// app/(anon-user)/medicines/page.tsx 수정 필요
// Mock 데이터 제거
// 실제 API 호출 구현
// 로딩/에러 상태 처리
```

## 다음 기술적 마일스톤

### 1주차: API 인프라 복구
- [ ] 환경 설정 파일 재생성
- [ ] API 클라이언트 재구축
- [ ] 커스텀 훅 재개발
- [ ] Mock 데이터 제거

### 2주차: 검색 기능 완성
- [ ] 검색 성능 최적화
- [ ] 페이지네이션 구현
- [ ] 필터링 기능 추가
- [ ] 에러 처리 완성

### 1개월차: 지도 기능 구현
- [ ] 카카오 맵 API 통합
- [ ] 위치 기반 검색
- [ ] 약국 정보 연동
- [ ] 실시간 재고 확인

## 기술적 부채 관리

### 높은 우선순위
1. Mock 데이터 의존성 제거
2. API 인프라 재구축
3. 환경 설정 체계화
4. 타입 안전성 강화

### 중간 우선순위
1. 성능 최적화
2. 테스트 커버리지 향상
3. 에러 처리 표준화
4. 접근성 개선

### 낮은 우선순위
1. 코드 리팩토링
2. 문서화 개선
3. 개발 도구 최적화
4. 모니터링 강화 