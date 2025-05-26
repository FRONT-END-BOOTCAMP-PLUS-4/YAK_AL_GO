'use client';

import type React from 'react';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ArrowUpDown, Loader2 } from 'lucide-react';

/**
 * 의약품 데이터 타입 정의
 */
interface Medicine {
  id: number;
  name: string;
  company: string;
  type: string;
  description: string;
  image: string;
}

/**
 * 확장된 Mock 의약품 데이터 (무한스크롤 테스트용)
 * 실제 환경에서는 API에서 페이지네이션으로 데이터를 가져옴
 */
const generateMockMedicines = (): Medicine[] => {
  const baseData = [
    { name: '타이레놀', company: '한국얀센', type: '진통제', description: '해열, 진통, 소염 작용' },
    { name: '판콜에이', company: '동아제약', type: '감기약', description: '감기 증상 완화' },
    { name: '게보린', company: '삼진제약', type: '진통제', description: '두통, 치통, 생리통 완화' },
    { name: '베아제', company: '대웅제약', type: '소화제', description: '소화불량, 체함, 위부팽만감' },
    { name: '훼스탈골드', company: '한독', type: '소화제', description: '소화불량, 식체, 위부팽만감' },
    { name: '판피린', company: '동아제약', type: '진통제', description: '두통, 치통, 근육통 완화' },
    { name: '낙센', company: '동아제약', type: '진통제', description: '관절염, 근육통 완화' },
    { name: '애드빌', company: '화이자', type: '진통제', description: '염증성 통증 완화' },
    { name: '부루펜', company: '삼일제약', type: '진통제', description: '해열, 진통, 항염 작용' },
    { name: '콜대원', company: '동화약품', type: '감기약', description: '감기로 인한 제반 증상 완화' },
    { name: '펜잘큐', company: '동아제약', type: '감기약', description: '감기, 몸살 증상 완화' },
    { name: '씨콜드', company: '한미약품', type: '감기약', description: '감기 초기 증상 완화' },
    { name: '훼스탈플러스', company: '한독', type: '소화제', description: '소화불량, 위산과다 개선' },
    { name: '까스활명수', company: '동화약품', type: '소화제', description: '소화불량, 복통, 설사' },
    { name: '정로환', company: '동화약품', type: '소화제', description: '설사, 복통, 소화불량' },
    { name: '아목시실린', company: '유한양행', type: '항생제', description: '세균 감염 치료' },
    { name: '세파클러', company: '한미약품', type: '항생제', description: '호흡기 감염 치료' },
    { name: '클라리스로마이신', company: '한국애보트', type: '항생제', description: '위염균 제거' },
  ];

  // 더 많은 데이터를 생성하여 무한스크롤 테스트
  const medicines: Medicine[] = [];
  for (let i = 0; i < 100; i++) {
    const baseItem = baseData[i % baseData.length];
    medicines.push({
      id: i + 1,
      name: `${baseItem.name}${i > baseData.length - 1 ? ` ${Math.floor(i / baseData.length) + 1}` : ''}`,
      company: baseItem.company,
      type: baseItem.type,
      description: baseItem.description,
      image: '/placeholder.svg?height=80&width=80',
    });
  }
  return medicines;
};

const allMedicinesData = generateMockMedicines();

export default function MedicinesPage() {
  // 상태 관리
  const [displayedMedicines, setDisplayedMedicines] = useState<Medicine[]>([]);
  const [allFilteredMedicines, setAllFilteredMedicines] = useState<Medicine[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // 무한스크롤을 위한 설정
  const ITEMS_PER_PAGE = 12; // 한 번에 로드할 아이템 수
  const loadMoreRef = useRef<HTMLDivElement>(null);

  /**
   * 더 많은 데이터 로드 함수 (무한스크롤용)
   * 실제 환경에서는 API 호출로 대체
   */
  const loadMoreMedicines = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // API 호출 시뮬레이션 (실제로는 fetch 또는 axios 사용)
    setTimeout(() => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newMedicines = allFilteredMedicines.slice(startIndex, endIndex);
      
      if (newMedicines.length > 0) {
        setDisplayedMedicines(prev => [...prev, ...newMedicines]);
        setCurrentPage(prev => prev + 1);
      }
      
      setIsLoading(false);
    }, 500); // 로딩 시뮬레이션
  }, [isLoading, currentPage, allFilteredMedicines]);

  /**
   * 정렬 처리 함수
   */
  const handleSort = () => {
    if (sortOrder === null || sortOrder === 'desc') {
      setSortOrder('asc');
    } else {
      setSortOrder('desc');
    }
  };

  /**
   * 검색어 입력 처리 함수
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  /**
   * 필터링 및 정렬 로직
   * 검색어, 탭, 정렬 순서에 따라 데이터 필터링
   */
  useEffect(() => {
    let filtered = allMedicinesData;

    // 검색 필터 적용
    if (searchQuery) {
      filtered = filtered.filter(
        (medicine: Medicine) =>
          medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          medicine.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          medicine.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 탭 필터 적용
    if (activeTab !== 'all') {
      const typeMap: Record<string, string> = {
        painkillers: '진통제',
        cold: '감기약',
        digestive: '소화제',
        antibiotics: '항생제',
      };
      filtered = filtered.filter((medicine: Medicine) => medicine.type === typeMap[activeTab]);
    }

    // 정렬 적용
    if (sortOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    } else if (sortOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name, 'ko'));
    }

    // 필터링된 전체 데이터 저장
    setAllFilteredMedicines(filtered);
    
    // 첫 페이지 데이터만 표시
    const firstPageData = filtered.slice(0, ITEMS_PER_PAGE);
    setDisplayedMedicines(firstPageData);
    setCurrentPage(2); // 다음 로드할 페이지는 2페이지
  }, [searchQuery, activeTab, sortOrder]);

  /**
   * 무한스크롤 Intersection Observer 설정
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && displayedMedicines.length < allFilteredMedicines.length) {
          loadMoreMedicines();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [isLoading, displayedMedicines.length, allFilteredMedicines.length, loadMoreMedicines]);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">약 검색</h1>
          <p className="text-muted-foreground">약 이름, 성분, 제조사 등으로 검색하여 원하는 약을 찾아보세요.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="약 이름, 성분, 제조사 검색" value={searchQuery} onChange={handleSearch} />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2" onClick={handleSort}>
              <ArrowUpDown className="h-4 w-4" />
              {sortOrder === 'asc' ? '가나다순 ↓' : sortOrder === 'desc' ? '가나다순 ↑' : '가나다순'}
            </Button>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              필터
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="painkillers">진통제</TabsTrigger>
            <TabsTrigger value="cold">감기약</TabsTrigger>
            <TabsTrigger value="digestive">소화제</TabsTrigger>
            <TabsTrigger value="antibiotics">항생제</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayedMedicines.length > 0 ? (
                displayedMedicines.map((medicine: Medicine) => (
                  <Link href={`/medicines/${medicine.id}`} key={medicine.id}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={medicine.image || '/placeholder.svg'}
                              alt={medicine.name}
                              width={80}
                              height={80}
                              className="rounded-md object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold">{medicine.name}</h3>
                              <Badge variant="outline">{medicine.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{medicine.company}</p>
                            <p className="text-sm">{medicine.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground">검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
            
            {/* 무한스크롤 로딩 인디케이터 */}
            <div className="flex justify-center py-4" ref={loadMoreRef}>
              {isLoading && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
            </div>
          </TabsContent>
          {/* 다른 탭들도 동일한 구조로 렌더링 */}
          {['painkillers', 'cold', 'digestive', 'antibiotics'].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue} className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {displayedMedicines.length > 0 ? (
                  displayedMedicines.map((medicine: Medicine) => (
                    <Link href={`/medicines/${medicine.id}`} key={medicine.id}>
                      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <img
                                src={medicine.image || '/placeholder.svg'}
                                alt={medicine.name}
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <h3 className="font-bold">{medicine.name}</h3>
                                <Badge variant="outline">{medicine.type}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{medicine.company}</p>
                              <p className="text-sm">{medicine.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-muted-foreground">검색 결과가 없습니다.</p>
                  </div>
                )}
              </div>
              
              {/* 무한스크롤 로딩 인디케이터 */}
              <div className="flex justify-center py-4" ref={loadMoreRef}>
                {isLoading && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
