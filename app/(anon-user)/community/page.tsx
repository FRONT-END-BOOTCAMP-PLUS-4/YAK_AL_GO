'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useQuestions } from '@/lib/queries/useQuestions';
import { usePosts } from '@/lib/queries/usePosts';
import { useSearchParams, useRouter } from 'next/navigation';

import { QuestionCard } from '@/components/community/QuestionCard';
import { PostCard } from '@/components/community/PostCard';
import { QnaSkeleton } from '@/components/community/QnaSkeleton';
import { SimpleSearch } from '@/components/search/SimpleSearch';

export default function CommunityPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL 파라미터에서 탭 값 가져오기 (기본값: 'qnas')
  const tabFromUrl = searchParams.get('tab') || 'qnas';

  const [activeTab, setActiveTab] = useState(tabFromUrl);

  // 전문가 Q&A 데이터 조회
  const {
    data: qnas,
    fetchNextPage: fetchNextQnas,
    hasNextPage: hasNextQnas,
    isFetchingNextPage: isFetchingNextQnas,
    isLoading: isLoadingQnas,
    isPending: isPendingQnas,
    refetch: refetchQuestions,
  } = useQuestions();

  // 자유게시판 데이터 조회
  const {
    data: postsData,
    fetchNextPage: fetchNextPosts,
    hasNextPage: hasNextPosts,
    isFetchingNextPage: isFetchingNextPosts,
    isLoading: isLoadingPosts,
    isPending: isPendingPosts,
    refetch: refetchPosts,
  } = usePosts();

  // 전문가 Q&A 데이터 조회 결과 페이지네이션 처리
  const questions = qnas?.pages.flatMap((page: any) => page?.questions || []) || [];

  // 자유게시판 데이터 조회 결과 페이지네이션 처리
  const posts = postsData?.pages.flatMap((page: any) => page?.posts || []) || [];

  // 로딩 상태 계산
  const isInitialLoading = activeTab === 'qnas' ? isLoadingQnas || isPendingQnas : isLoadingPosts || isPendingPosts;

  const isFetchingNext = activeTab === 'qnas' ? isFetchingNextQnas : isFetchingNextPosts;
  const hasNext = activeTab === 'qnas' ? hasNextQnas : hasNextPosts;
  const fetchNext = activeTab === 'qnas' ? fetchNextQnas : fetchNextPosts;

  // URL 파라미터 변경 시 탭 상태 업데이트
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab') || 'qnas';
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  // 탭 변경 시 URL 업데이트 및 데이터 새로고침
  const handleTabChange = (value: string) => {
    setActiveTab(value);

    // URL 파라미터 업데이트
    const params = new URLSearchParams(searchParams);
    params.set('tab', value);
    router.push(`/community?${params.toString()}`);

    // 해당 탭의 데이터 새로고침
    if (value === 'posts') {
      refetchPosts();
    } else if (value === 'qnas') {
      refetchQuestions();
    }
  };

  // 무한 스크롤 로딩 감지하는 ref 설정
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNext && hasNext) {
          fetchNext();
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
  }, [isFetchingNext, fetchNext, hasNext]);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6 overflow-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">커뮤니티</h1>
          <p className="text-muted-foreground">약에 관한 정보를 공유하고 소통하는 공간입니다.</p>
        </div>

        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="qnas">전문가 Q&A</TabsTrigger>
            <TabsTrigger value="posts">자유게시판</TabsTrigger>
          </TabsList>

          {/* 간단한 자동완성 검색 바 */}
          <div className="flex flex-col gap-4 sm:flex-row mx-1 mt-6">
            <div className="flex-1">
              <SimpleSearch
                placeholder={activeTab === 'qnas' ? '질문을 검색하세요...' : '게시글을 검색하세요...'}
                activeTab={activeTab as 'qnas' | 'posts'}
              />
            </div>
            <Button asChild>
              {activeTab === 'qnas' ? (
                <Link href="/member/qnas/write">질문하기</Link>
              ) : (
                <Link href="/member/posts/write">글쓰기</Link>
              )}
            </Button>
          </div>

          <TabsContent value="qnas" className="mt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {isInitialLoading ? (
                // 초기 로딩 중일 때 스켈레톤 표시
                <>
                  <QnaSkeleton />
                  <QnaSkeleton />
                  <QnaSkeleton />
                </>
              ) : questions.length > 0 ? (
                // 일반 질문 목록 표시
                questions.map((qna) => <QuestionCard key={qna.id} qna={qna} />)
              ) : (
                // 로딩 완료 후 데이터가 없을 때 메시지 표시
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">아직 질문이 없습니다</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">첫 번째 질문을 올려보세요!</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/member/qnas/write">질문하기</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="posts" className="mt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {isInitialLoading ? (
                // 초기 로딩 중일 때 스켈레톤 표시
                <>
                  <QnaSkeleton />
                  <QnaSkeleton />
                  <QnaSkeleton />
                </>
              ) : posts.length > 0 ? (
                // 일반 게시글 목록 표시
                posts.map((post) => <PostCard key={post.id} post={post} />)
              ) : (
                // 로딩 완료 후 데이터가 없을 때 메시지 표시
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                      아직 게시글이 없습니다
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">첫 번째 게시글을 작성해보세요!</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/member/posts/write">글쓰기</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <div className="flex justify-center py-4" ref={loadMoreRef}>
            {isFetchingNext && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
