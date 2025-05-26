# 시스템 패턴 - 약알고

## 아키텍처 패턴

### 전체 시스템 아키텍처
```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js 15)                    │
├─────────────────────────────────────────────────────────────┤
│  Presentation Layer                                         │
│  ├── Pages (App Router)                                     │
│  ├── Components (Shadcn/ui)                                 │
│  └── Layouts                                                │
├─────────────────────────────────────────────────────────────┤
│  Application Layer                                          │
│  ├── Custom Hooks (재구축 필요)                              │
│  ├── Context Providers                                      │
│  └── State Management                                       │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure Layer                                       │
│  ├── API Client (삭제됨, 재구축 필요)                        │
│  ├── HTTP Interceptors                                      │
│  └── Error Handling                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend (API Routes)                     │
├─────────────────────────────────────────────────────────────┤
│  API Layer                                                  │
│  ├── REST Endpoints                                         │
│  ├── Request Validation (Zod)                               │
│  └── Response Formatting                                    │
├─────────────────────────────────────────────────────────────┤
│  Business Logic Layer                                       │
│  ├── Service Classes                                        │
│  ├── Data Processing                                        │
│  └── Business Rules                                         │
├─────────────────────────────────────────────────────────────┤
│  Data Access Layer                                          │
│  ├── Prisma ORM                                             │
│  ├── Database Queries                                       │
│  └── Data Validation                                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database (PostgreSQL)                    │
│  ├── Users & Authentication                                 │
│  ├── Medicines (식약처 데이터)                               │
│  ├── Pharmacies & Inventories                               │
│  └── Community (Posts, QnAs, Comments)                      │
└─────────────────────────────────────────────────────────────┘
```

### 현재 아키텍처 상태
- ✅ **Database Layer**: 완전 구현
- ✅ **API Layer**: 기본 구조 완성
- ❌ **Application Layer**: API 클라이언트 부재
- ❌ **Presentation Layer**: Mock 데이터 의존

## 디자인 패턴

### 1. Repository 패턴 (구현됨)
```typescript
// backend/services/MedicineDataService.ts
class MedicineDataService {
  async getMedicines(params: GetMedicinesParams) {
    // 데이터 접근 로직
  }
  
  async getMedicineById(id: string) {
    // 단일 의약품 조회
  }
  
  async syncMedicineData() {
    // 외부 API 동기화
  }
}
```

### 2. API Response 패턴 (구현됨)
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
    hasNext: boolean;
  };
}

// 사용 예시
return NextResponse.json({
  success: true,
  data: medicines,
  pagination: {
    page: currentPage,
    limit: pageSize,
    total: totalCount,
    hasNext: currentPage * pageSize < totalCount
  }
});
```

### 3. Error Handling 패턴 (구현됨)
```typescript
// 중앙화된 에러 처리
export async function handleApiError(error: unknown) {
  console.error('API Error:', error);
  
  if (error instanceof ZodError) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input data',
        details: error.errors
      }
    }, { status: 400 });
  }
  
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'DATABASE_ERROR',
        message: 'Database operation failed'
      }
    }, { status: 500 });
  }
  
  return NextResponse.json({
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Internal server error'
    }
  }, { status: 500 });
}
```

### 4. Custom Hook 패턴 (재구축 필요)
```typescript
// hooks/useMedicines.ts (삭제됨, 재구축 필요)
interface UseMedicinesOptions {
  query?: string;
  page?: number;
  limit?: number;
  enabled?: boolean;
}

const useMedicines = (options: UseMedicinesOptions = {}) => {
  const [data, setData] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);

  const fetchMedicines = useCallback(async () => {
    if (!options.enabled) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.getMedicines(options);
      setData(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchMedicines();
  }, [fetchMedicines]);

  return {
    data,
    loading,
    error,
    pagination,
    refetch: fetchMedicines
  };
};
```

### 5. Component Composition 패턴
```typescript
// 컴포넌트 합성 패턴
const MedicineSearchPage = () => {
  return (
    <SearchProvider>
      <SearchHeader />
      <SearchFilters />
      <SearchResults />
      <SearchPagination />
    </SearchProvider>
  );
};

// Context를 통한 상태 공유
const SearchContext = createContext<SearchContextType | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [page, setPage] = useState(1);
  
  // useMedicines 훅 사용 (재구축 필요)
  const { data, loading, error, pagination } = useMedicines({
    query,
    filters,
    page,
    enabled: true
  });

  return (
    <SearchContext.Provider value={{
      query, setQuery,
      filters, setFilters,
      page, setPage,
      data, loading, error, pagination
    }}>
      {children}
    </SearchContext.Provider>
  );
};
```

## API 설계 패턴

### RESTful API 구조
```
GET    /api/medicines              # 의약품 목록 조회
GET    /api/medicines/[id]         # 의약품 상세 조회 (삭제됨, 재구축 필요)
POST   /api/medicines              # 의약품 데이터 동기화
PUT    /api/medicines/[id]         # 의약품 정보 수정
DELETE /api/medicines/[id]         # 의약품 삭제

GET    /api/pharmacies             # 약국 목록 조회
GET    /api/pharmacies/[id]        # 약국 상세 조회
GET    /api/pharmacies/nearby      # 주변 약국 검색

GET    /api/qnas                   # Q&A 목록 조회
POST   /api/qnas                   # 질문 작성
GET    /api/qnas/[id]              # Q&A 상세 조회
POST   /api/qnas/[id]/answers      # 답변 작성

GET    /api/auth/session           # 세션 정보 조회
POST   /api/auth/signin            # 로그인
POST   /api/auth/signout           # 로그아웃
```

### Request/Response 패턴
```typescript
// 요청 스키마 (Zod)
const GetMedicinesSchema = z.object({
  query: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  category: z.string().optional(),
  sortBy: z.enum(['name', 'company', 'date']).default('name'),
  sortOrder: z.enum(['asc', 'desc']).default('asc')
});

// API 핸들러 패턴
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = GetMedicinesSchema.parse({
      query: searchParams.get('query'),
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 20,
      category: searchParams.get('category'),
      sortBy: searchParams.get('sortBy') || 'name',
      sortOrder: searchParams.get('sortOrder') || 'asc'
    });

    const result = await medicineService.getMedicines(params);
    
    return NextResponse.json({
      success: true,
      data: result.medicines,
      pagination: {
        page: params.page,
        limit: params.limit,
        total: result.total,
        hasNext: params.page * params.limit < result.total
      }
    });
  } catch (error) {
    return handleApiError(error);
  }
}
```

## 상태 관리 패턴

### 1. Local State (useState)
```typescript
// 컴포넌트 레벨 상태
const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // API 호출
    setIsSubmitting(false);
  };
};
```

### 2. Context API (전역 상태)
```typescript
// 전역 상태 관리
interface AppContextType {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
```

### 3. Server State (Custom Hooks)
```typescript
// 서버 상태 관리 (재구축 필요)
const useServerState = <T>(
  key: string,
  fetcher: () => Promise<T>,
  options: {
    enabled?: boolean;
    refetchInterval?: number;
    staleTime?: number;
  } = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 캐싱 및 리페칭 로직
  // 에러 처리 로직
  // 로딩 상태 관리

  return { data, loading, error, refetch };
};
```

## 데이터 플로우 패턴

### 현재 문제 상황
```typescript
// ❌ 현재 상황: Mock 데이터 사용
const MedicinesPage = () => {
  const [medicines, setMedicines] = useState(mockData); // 하드코딩된 데이터
  
  // 실제 API 호출 없음
  // 검색, 필터링이 클라이언트 사이드에서만 동작
  // 페이지네이션 미구현
};
```

### 목표 데이터 플로우
```typescript
// ✅ 목표: 실제 API 연동
const MedicinesPage = () => {
  const [searchParams, setSearchParams] = useState({
    query: '',
    page: 1,
    filters: {}
  });
  
  // 실제 API 호출 (재구축 필요)
  const { data, loading, error, pagination } = useMedicines(searchParams);
  
  if (loading) return <MedicinesSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      <SearchForm onSearch={setSearchParams} />
      <MedicinesList medicines={data} />
      <Pagination {...pagination} onPageChange={setSearchParams} />
    </div>
  );
};
```

## 에러 처리 패턴

### 1. API 레벨 에러 처리
```typescript
// 중앙화된 에러 처리
class ApiError extends Error {
  constructor(
    public code: string,
    public message: string,
    public status: number = 500
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// 에러 타입별 처리
export const handleApiError = (error: unknown) => {
  if (error instanceof ApiError) {
    return NextResponse.json({
      success: false,
      error: {
        code: error.code,
        message: error.message
      }
    }, { status: error.status });
  }
  
  // 기타 에러 처리...
};
```

### 2. 클라이언트 에러 처리
```typescript
// 에러 바운더리 패턴
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // 에러 리포팅 서비스로 전송
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// 커스텀 에러 훅 (재구축 필요)
const useErrorHandler = () => {
  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error('알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  return { handleError };
};
```

## 성능 최적화 패턴

### 1. 메모이제이션 패턴
```typescript
// React.memo로 컴포넌트 최적화
const MedicineCard = React.memo(({ medicine }: { medicine: Medicine }) => {
  return (
    <Card>
      <CardContent>
        <h3>{medicine.name}</h3>
        <p>{medicine.company}</p>
      </CardContent>
    </Card>
  );
});

// useMemo로 계산 최적화
const MedicinesList = ({ medicines, filters }: Props) => {
  const filteredMedicines = useMemo(() => {
    return medicines.filter(medicine => 
      medicine.name.includes(filters.query)
    );
  }, [medicines, filters.query]);

  return (
    <div>
      {filteredMedicines.map(medicine => 
        <MedicineCard key={medicine.id} medicine={medicine} />
      )}
    </div>
  );
};
```

### 2. 가상화 패턴 (대용량 데이터)
```typescript
// 가상 스크롤 구현 (react-window 사용)
import { FixedSizeList as List } from 'react-window';

const VirtualizedMedicinesList = ({ medicines }: Props) => {
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
    <div style={style}>
      <MedicineCard medicine={medicines[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={medicines.length}
      itemSize={120}
      width="100%"
    >
      {Row}
    </List>
  );
};
```

### 3. 무한 스크롤 패턴
```typescript
// 무한 스크롤 구현 (재구축 필요)
const useInfiniteScroll = (fetchMore: () => Promise<void>) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          !== document.documentElement.offsetHeight || isFetching) return;
      setIsFetching(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData();
  }, [isFetching]);

  const fetchMoreData = async () => {
    await fetchMore();
    setIsFetching(false);
  };

  return [isFetching, setIsFetching];
};
```

## 보안 패턴

### 1. 입력 검증 패턴
```typescript
// Zod 스키마를 통한 입력 검증
const CreateMedicineSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  description: z.string().max(1000).optional(),
  category: z.enum(['진통제', '감기약', '소화제', '항생제'])
});

// API에서 검증 사용
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = CreateMedicineSchema.parse(body);
    
    // 검증된 데이터로 처리
    const result = await medicineService.createMedicine(validatedData);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input',
          details: error.errors
        }
      }, { status: 400 });
    }
    
    return handleApiError(error);
  }
}
```

### 2. 인증 패턴
```typescript
// 미들웨어를 통한 인증 확인
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  
  if (!token && request.nextUrl.pathname.startsWith('/api/protected')) {
    return NextResponse.json(
      { success: false, error: { code: 'UNAUTHORIZED', message: 'Authentication required' } },
      { status: 401 }
    );
  }
  
  return NextResponse.next();
}

// 권한 기반 접근 제어
const requireAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    
    if (!session) {
      return res.status(401).json({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required' }
      });
    }
    
    return handler(req, res);
  };
};
```

## 즉시 해결해야 할 패턴 이슈

### 1. API 클라이언트 패턴 재구축 (Critical)
```typitten
// lib/api.ts 재생성 필요
import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
});

// 요청 인터셉터
api.interceptors.request.use((config) => {
  // 인증 토큰 추가
  // 요청 로깅
  return config;
});

// 응답 인터셉터
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // 에러 처리 로직
    return Promise.reject(error);
  }
);

// 타입 안전한 API 함수들
export const medicineApi = {
  getMedicines: (params: GetMedicinesParams) => 
    api.get<ApiResponse<Medicine[]>>('/medicines', { params }),
  getMedicineById: (id: string) => 
    api.get<ApiResponse<Medicine>>(`/medicines/${id}`),
  // 기타 API 함수들...
};
```

### 2. Mock 데이터 제거 패턴 (Critical)
```typescript
// ❌ 현재: 하드코딩된 Mock 데이터
const medicinesData = [
  { id: 1, name: '타이레놀', company: '한국얀센' },
  // ... 더 많은 하드코딩된 데이터
];

// ✅ 목표: 실제 API 연동
const MedicinesPage = () => {
  const { data: medicines, loading, error } = useMedicines({
    enabled: true
  });
  
  if (loading) return <MedicinesSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return <MedicinesList medicines={medicines} />;
};
```

### 3. 환경 설정 패턴 (Critical)
```typescript
// env.example 재생성 필요
DATABASE_URL="postgresql://username:password@localhost:5432/yakalgo"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
KAKAO_MAP_API_KEY="your-kakao-api-key"
MEDICINE_API_KEY="your-medicine-api-key"
NODE_ENV="development"

// 환경 변수 검증 패턴
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  KAKAO_MAP_API_KEY: z.string().optional(),
  MEDICINE_API_KEY: z.string().optional(),
});

const env = envSchema.parse(process.env);
```

## 다음 단계 패턴 구현

### 1주차: 기본 패턴 복구
- [ ] API 클라이언트 패턴 재구축
- [ ] 커스텀 훅 패턴 재개발
- [ ] 에러 처리 패턴 적용
- [ ] 환경 설정 패턴 구축

### 2주차: 고급 패턴 적용
- [ ] 무한 스크롤 패턴
- [ ] 가상화 패턴 (대용량 데이터)
- [ ] 캐싱 패턴
- [ ] 성능 최적화 패턴

### 1개월차: 확장 패턴
- [ ] 실시간 업데이트 패턴
- [ ] 오프라인 지원 패턴
- [ ] PWA 패턴
- [ ] 마이크로 인터랙션 패턴 