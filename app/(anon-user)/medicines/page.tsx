'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import CategoryIcon from '@/components/ui/CategoryIcon';
import SearchModal from '@/components/medicines/SearchModal';
import {
  Search,
  Filter,
  ArrowUpDown,
  Loader2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import {
  formatMedicineInfo,
  processDisplayNames,
  selectMedicineImage,
  MAIN_CATEGORIES,
  CATEGORY_KEY_MAP,
  isDiseaseSearch,
  getMedicineKeywordsForDisease,
  type SimplifiedMedicine,
} from '@/utils/medicineFormatter';
import { useSearchParams } from 'next/navigation';

/**
 * API 응답 타입 정의
 */
interface MediBasicDto {
  itemSeq: string;
  itemName: string;
  entpName: string;
  classNo: string;
  chart?: string;
  materialName?: string;
  etcOtcCode?: string;
}

interface ApiResponse {
  success: boolean;
  data: {
    medicines: MediBasicDto[];
    currentPage: number;
    totalPages: number;
    totalCount: number;
  };
}

const MedicineNameWithTooltip = ({ shortName, medicineName, manufacturer }: { shortName: string; medicineName: string; manufacturer: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      tabIndex={0}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {show && (
        <div className="absolute z-50 left-0 bottom-full mb-2 min-w-[300px] max-w-[600px] bg-white border border-gray-200 shadow-lg rounded-xl px-3 py-2 text-xs text-gray-800 animate-fade-in pointer-events-none">
          <div className="font-semibold whitespace-normal break-all">{medicineName}</div>
          <div className="text-gray-500 whitespace-normal break-all">{manufacturer}</div>
        </div>
      )}
      <span className="font-bold text-sm truncate max-w-[120px] block cursor-pointer">
        {shortName}
      </span>
    </div>
  );
};

export default function MedicinesPage() {
  const searchParams = useSearchParams();
  
  // URL 파라미터에서 초기 상태 읽어오기
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';
  
  // 상태 관리
  const [medicines, setMedicines] = useState<MediBasicDto[]>([]); // 현재 페이지 데이터
  const [formattedMedicines, setFormattedMedicines] = useState<SimplifiedMedicine[]>([]); // 포맷된 데이터
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 설정값
  const ITEMS_PER_PAGE = 99; // 페이지당 표시할 데이터 수
  const SEARCH_ITEMS_PER_PAGE = 198; // 검색 시 더 많은 결과 표시

  /**
   * API에서 의약품 데이터 가져오기 (페이지네이션)
   */
  const fetchMedicinesFromApi = useCallback(
    async (
      page = 1,
      search?: string,
      category?: string,
      sortBy?: 'name' | 'reviews' | 'name_asc' | 'name_desc'
    ) => {
      setIsLoading(true);

      // 로딩 시간 부여를 위한 최소 대기 시간 (최적화된 빠른 응답)
      const minLoadingTime = 250;
      const startTime = Date.now();

      try {
        const params = new URLSearchParams();
        // 검색 시에는 더 많은 결과를 표시
        const limitToUse = search?.trim() ? SEARCH_ITEMS_PER_PAGE : ITEMS_PER_PAGE;
        params.append('limit', limitToUse.toString());
        params.append('page', page.toString());

        if (search) params.append('search', search);
        if (category && category !== '전체') params.append('category', category);
        if (sortBy) params.append('sortBy', sortBy);

        const response = await fetch(`/api/medicines?${params.toString()}`);
        const result: ApiResponse = await response.json();

        if (result.success) {
          // 중복 제거
          const uniqueMedicines = result.data.medicines.filter(
            (item, index, self) => index === self.findIndex((t) => t.itemSeq === item.itemSeq)
          );

          setMedicines(uniqueMedicines);

          // 중복 의약품명 처리 및 포맷팅 적용
          const formatted = processDisplayNames(uniqueMedicines);
          setFormattedMedicines(formatted);

          setCurrentPage(result.data.currentPage || page);
          setTotalPages(result.data.totalPages || 1);
        } else {
          console.error('❌ API 오류:', result);
          setMedicines([]);
          setFormattedMedicines([]);
          setCurrentPage(1);
          setTotalPages(1);
        }
      } catch (error) {
        console.error('💥 데이터 가져오기 오류:', error);
        setMedicines([]);
        setFormattedMedicines([]);
        setCurrentPage(1);
        setTotalPages(1);
      } finally {
        // 최소 로딩 시간 보장
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    },
    []
  );

  /**
   * Chart 텍스트 포맷팅 (길이 제한 및 말줄임표)
   */
  const formatChartText = (chart: string, maxLength = 50): string => {
    if (!chart) return '';
    if (chart.length <= maxLength) return chart;
    return `${chart.substring(0, maxLength)}...`;
  };

  /**
   * 의약품명 스마트 생략 함수 (중복 방지)
   */
  const formatMedicineNameSmart = (targetName: string, allNames: string[]): string => {
    if (!targetName) return '';

    const maxLength = 12; // 최대 허용 길이
    const minLength = 6; // 최소 표시 길이

    // 이미 충분히 짧으면 그대로 반환
    if (targetName.length <= minLength) return targetName;

    // 점진적으로 길이를 늘려가며 중복 확인
    for (let len = minLength; len <= maxLength; len++) {
      const truncated = targetName.substring(0, len);

      // 같은 길이로 자른 다른 이름들과 중복되는지 확인
      const conflicts = allNames.filter(
        (name) => name !== targetName && name.substring(0, len) === truncated
      );

      // 중복이 없으면 이 길이로 생략
      if (conflicts.length === 0) {
        return len === targetName.length ? targetName : `${truncated}...`;
      }
    }

    // 최대 길이에서도 중복이면 뒤쪽 중요 정보 포함
    const frontPart = targetName.substring(0, 4);
    const backPart = targetName.slice(-4);
    return targetName.length > 8
      ? `${frontPart}...${backPart}`
      : `${targetName.substring(0, maxLength)}...`;
  };

  /**
   * 페이지 변경 핸들러
   */
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages || newPage === currentPage || isLoading) {
        return;
      }

      // 페이지 변경 시 즉시 상단으로 스크롤 (우선 실행)
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setCurrentPage(newPage);

      const category = CATEGORY_KEY_MAP[activeTab];
      const sortBy =
        sortOrder === 'asc' ? 'name_asc' : sortOrder === 'desc' ? 'name_desc' : undefined;

      fetchMedicinesFromApi(newPage, searchQuery, category, sortBy);

      // 추가 보장: 약간의 지연 후 다시 한 번 스크롤
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    },
    [totalPages, currentPage, isLoading, activeTab, sortOrder, searchQuery, fetchMedicinesFromApi]
  );

  /**
   * 정렬 처리 함수
   */
  const handleSort = useCallback(() => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? null : 'asc';
    setSortOrder(newSortOrder);
    const category = CATEGORY_KEY_MAP[activeTab];
    const sortBy =
      newSortOrder === 'asc' ? 'name_asc' : newSortOrder === 'desc' ? 'name_desc' : undefined;
    fetchMedicinesFromApi(currentPage, searchQuery.trim(), category, sortBy);
  }, [sortOrder, activeTab, currentPage, searchQuery, fetchMedicinesFromApi]);

  /**
   * URL 업데이트 함수
   */
  const updateURL = useCallback((search: string, category: string) => {
    const url = new URL(window.location.href);
    
    if (search.trim()) {
      url.searchParams.set('search', search.trim());
    } else {
      url.searchParams.delete('search');
    }
    
    if (category && category !== 'all') {
      url.searchParams.set('category', category);
    } else {
      url.searchParams.delete('category');
    }
    
    // 브라우저 히스토리에 추가 (뒤로가기 지원)
    window.history.pushState({}, '', url.toString());
  }, []);

  /**
   * 검색 실행 함수
   */
  const executeSearch = useCallback(
    (query?: string, category?: string) => {
      const searchTerm = query !== undefined ? query : searchQuery;
      const searchCategory = category !== undefined ? category : activeTab;

      // 매개변수로 받은 검색어가 있으면 상태 업데이트
      if (query !== undefined) {
        setSearchQuery(query);
      }

      // 매개변수로 받은 카테고리가 있으면 상태 업데이트
      if (category !== undefined) {
        setActiveTab(category);
      }

      setCurrentPage(1);

      // URL 업데이트
      updateURL(searchTerm, searchCategory);

      // 🔍 검색 시 카테고리 필터 적용
      const categoryToUse = searchCategory === 'all' ? '전체' : CATEGORY_KEY_MAP[searchCategory];

      // 백엔드에서 병명 검색을 처리하므로 단순히 검색어 전달
      fetchMedicinesFromApi(1, searchTerm.trim(), categoryToUse);
      setIsSearchModalOpen(false);

      // 병명 검색 모드인 경우 콘솔에 로그 출력 (디버깅용)
      if (searchTerm.trim() && isDiseaseSearch(searchTerm.trim())) {
        console.log(`🔍 병명 검색: "${searchTerm}"`);
      }
    },
    [searchQuery, activeTab, fetchMedicinesFromApi, updateURL]
  );

  /**
   * 검색 모달 열기
   */
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  /**
   * 검색어 변경 핸들러
   */
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  /**
   * 탭 변경 핸들러
   */
  const handleTabChange = useCallback(
    (newTab: string) => {
      setActiveTab(newTab);
      setCurrentPage(1);

      // 카테고리 변경 시 검색어 초기화
      setSearchQuery('');

      // URL 업데이트
      updateURL('', newTab);

      const category = CATEGORY_KEY_MAP[newTab];
      const sortBy =
        sortOrder === 'asc' ? 'name_asc' : sortOrder === 'desc' ? 'name_desc' : undefined;

      // 검색어 없이 해당 카테고리의 전체 데이터 로드
      fetchMedicinesFromApi(1, '', category, sortBy);
    },
    [sortOrder, fetchMedicinesFromApi, updateURL]
  );

  /**
   * 필터 초기화 함수
   */
  const handleResetFilters = () => {
    // 모든 필터 상태 초기화
    setSearchQuery('');
    setSortOrder(null);
    setActiveTab('all');
    setCurrentPage(1);

    // URL 초기화
    updateURL('', 'all');

    // 초기 상태로 데이터 다시 로드
    fetchMedicinesFromApi(1, '', '전체', undefined);

    // 초기화 시 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 필터가 적용된 상태인지 확인
   */
  const hasActiveFilters = () => {
    return (
      searchQuery.trim() !== '' || // 검색어가 입력됨
      sortOrder !== null || // 정렬이 적용됨
      activeTab !== 'all' || // 전체가 아닌 카테고리 선택됨
      currentPage !== 1 // 첫 페이지가 아님
    );
  };

  /**
   * 초기 데이터 로드 및 URL 파라미터 처리
   */
  useEffect(() => {
    // URL 파라미터에서 검색어와 카테고리 확인
    const urlSearchQuery = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || 'all';
    
    if (urlSearchQuery || urlCategory !== 'all') {
      // URL에서 검색 조건이 있으면 해당 조건으로 검색 실행
      const categoryToUse = urlCategory === 'all' ? '전체' : CATEGORY_KEY_MAP[urlCategory];
      fetchMedicinesFromApi(1, urlSearchQuery, categoryToUse);
    } else {
      // 검색 조건이 없으면 기본 데이터 로드
      fetchMedicinesFromApi(1);
    }
  }, [fetchMedicinesFromApi, searchParams]);

  /**
   * 페이지네이션 버튼 생성
   */
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // 끝 페이지가 조정되면 시작 페이지도 다시 조정
    const adjustedStartPage =
      endPage - startPage + 1 < maxVisiblePages
        ? Math.max(1, endPage - maxVisiblePages + 1)
        : startPage;

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  /**
   * 의약품 카드 렌더링 함수
   */
  const renderMedicineCard = (medicine: SimplifiedMedicine, index: number) => {
    const originalMedicine = medicines.find((m) => m.itemSeq === medicine.itemSeq);
    return (
      <Link href={`/medicines/${medicine.itemSeq}`} key={`${medicine.itemSeq}-${index}`}>
        <Card className="hover:shadow-md transition-shadow cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 h-20 min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]">
                <img
                  src={selectMedicineImage(
                    medicine.itemSeq,
                    originalMedicine?.chart
                  )}
                  alt={medicine.originalName}
                  className="w-full h-full rounded-md object-cover aspect-square block"
                  style={{ width: '80px', height: '80px' }}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <MedicineNameWithTooltip
                    shortName={formatMedicineNameSmart(
                      medicine.displayName,
                      formattedMedicines.map((m) => m.displayName)
                    )}
                    medicineName={medicine.originalName}
                    manufacturer={medicine.originalManufacturer}
                  />
                  <Badge 
                    variant="outline" 
                    className="text-xs shrink-0"
                    title={`카테고리: ${medicine.category.display}`}
                  >
                    {medicine.category.display}
                  </Badge>
                </div>
                <p 
                  className="text-sm text-muted-foreground truncate px-1 py-0.5 rounded transition-colors" 
                  title={medicine.originalManufacturer}
                >
                  {medicine.shortManufacturer}
                </p>
                <p className="text-xs text-muted-foreground">
                  {originalMedicine?.etcOtcCode || '의약품'}
                </p>
                {originalMedicine?.chart && (
                  <p 
                    className="text-xs text-gray-600 line-clamp-1 overflow-hidden text-ellipsis px-1 py-0.5 rounded transition-colors"
                    title={originalMedicine.chart}
                  >
                    {formatChartText(originalMedicine.chart)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">약 검색</h1>
          <p className="text-muted-foreground">
            약 이름, 성분, 제조사, 병명 등으로 검색하여 원하는 약을 찾아보세요.
          </p>
        </div>

        <Tabs
          value={activeTab}
          defaultValue="all"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid grid-cols-5 lg:grid-cols-9 gap-2 h-auto p-2 bg-transparent">
            {MAIN_CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.key}
                value={category.key}
                className="flex flex-col items-center gap-2 h-auto p-3 data-[state=active]:bg-primary/10 data-[state=active]:border-primary/20 rounded-lg shadow-sm border-b border-gray-200/50 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center gap-1">
                  {category.key === 'all' ? (
                    <span className="text-2xl">{category.icon}</span>
                  ) : (
                    <CategoryIcon
                      src={category.icon}
                      alt={category.label}
                      size={32}
                      className="w-8 h-8"
                    />
                  )}
                  <span className="text-xs font-medium leading-tight text-center">
                    {category.label}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-4">
            <Button onClick={openSearchModal} className="flex items-center gap-2 justify-center sm:justify-start">
              <Search className="h-4 w-4" />
              {searchQuery 
                ? (() => {
                    const isDisease = isDiseaseSearch(searchQuery);
                    const categoryText = activeTab !== 'all' ? ` (${MAIN_CATEGORIES.find(c => c.key === activeTab)?.label})` : '';
                    return `"${searchQuery}"${categoryText}${isDisease ? ' (병명검색)' : ''}로 검색됨`;
                  })()
                : activeTab !== 'all'
                  ? `${MAIN_CATEGORIES.find(c => c.key === activeTab)?.label} 카테고리`
                  : '약 검색하기'}
            </Button>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <Button variant="outline" className="flex gap-2 justify-center" onClick={handleSort}>
                <ArrowUpDown className="h-4 w-4" />
                {sortOrder === 'asc'
                  ? '가나다순 ↓'
                  : sortOrder === 'desc'
                    ? '가나다순 ↑'
                    : '가나다순'}
              </Button>
              <Button
                variant="outline"
                className={`flex gap-2 justify-center ${!hasActiveFilters() ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleResetFilters}
                disabled={!hasActiveFilters()}
              >
                <RotateCcw className="h-4 w-4" />
                초기화
              </Button>
            </div>
          </div>

          {/* 검색 모달 */}
          <SearchModal
            isOpen={isSearchModalOpen}
            onClose={() => setIsSearchModalOpen(false)}
            searchQuery={searchQuery}
            onSearchQueryChange={handleSearchQueryChange}
            onSearch={executeSearch}
            currentCategory={activeTab}
          />

          {MAIN_CATEGORIES.map((category) => (
            <TabsContent key={category.key} value={category.key} className="mt-8">
              {/* 로딩 상태와 콘텐츠를 자연스럽게 전환 */}
              <div className="relative min-h-[400px]">
                {/* 로딩 상태 */}
                {isLoading && (
                  <div className="absolute inset-0 flex justify-center items-center bg-background/80 backdrop-blur-sm transition-all duration-300 ease-in-out">
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground">데이터를 불러오는 중...</p>
                    </div>
                  </div>
                )}

                {/* 의약품 목록 */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isLoading ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {formattedMedicines.length > 0
                      ? formattedMedicines.map((medicine, index) =>
                          renderMedicineCard(medicine, index)
                        )
                      : !isLoading && (
                          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                            <p className="text-muted-foreground">
                              {searchQuery 
                                ? `"${searchQuery}"${activeTab !== 'all' ? ` (${MAIN_CATEGORIES.find(c => c.key === activeTab)?.label})` : ''}에 대한 검색 결과가 없습니다.`
                                : '해당 카테고리에 의약품이 없습니다.'}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              다른 검색어, 카테고리, 또는 병명을 시도해보세요.
                            </p>
                          </div>
                        )}
                  </div>

                  {/* 페이지네이션 */}
                  {formattedMedicines.length > 0 && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                      {/* 이전 페이지 버튼 */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 || isLoading}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {/* 첫 페이지 */}
                      {generatePageNumbers()[0] > 1 && (
                        <>
                          <Button
                            variant={1 === currentPage ? 'default' : 'ghost'}
                            size="sm"
                            onClick={() => handlePageChange(1)}
                            disabled={isLoading}
                          >
                            1
                          </Button>
                          {generatePageNumbers()[0] > 2 && (
                            <span className="px-2 text-muted-foreground">...</span>
                          )}
                        </>
                      )}

                      {/* 페이지 번호들 */}
                      {generatePageNumbers().map((pageNum) => (
                        <Button
                          key={pageNum}
                          variant={pageNum === currentPage ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                          disabled={isLoading}
                        >
                          {pageNum}
                        </Button>
                      ))}

                      {/* 마지막 페이지 */}
                      {generatePageNumbers()[generatePageNumbers().length - 1] < totalPages && (
                        <>
                          {generatePageNumbers()[generatePageNumbers().length - 1] <
                            totalPages - 1 && (
                            <span className="px-2 text-muted-foreground">...</span>
                          )}
                          <Button
                            variant={totalPages === currentPage ? 'default' : 'ghost'}
                            size="sm"
                            onClick={() => handlePageChange(totalPages)}
                            disabled={isLoading}
                          >
                            {totalPages}
                          </Button>
                        </>
                      )}

                      {/* 다음 페이지 버튼 */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages || isLoading}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
