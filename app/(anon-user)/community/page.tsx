'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Search, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useQuestions } from '@/lib/queries/useQuestions';
import { usePosts } from '@/lib/queries/usePosts';
import { useSearchParams, useRouter } from 'next/navigation';

import { QuestionCard } from '@/components/community/QuestionCard';
import { PostCard } from '@/components/community/PostCard';
import { QnaSkeleton } from '@/components/community/QnaSkeleton';

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
    refetch: refetchQuestions,
  } = useQuestions();

  // 자유게시판 데이터 조회
  const {
    data: postsData,
    fetchNextPage: fetchNextPosts,
    hasNextPage: hasNextPosts,
    isFetchingNextPage: isFetchingNextPosts,
    refetch: refetchPosts,
  } = usePosts();

  // 전문가 Q&A 데이터 조회 결과 페이지네이션 처리
  const questions = qnas?.pages.flatMap((page: any) => page?.questions || []) || [];

  // 자유게시판 데이터 조회 결과 페이지네이션 처리
  const posts = postsData?.pages.flatMap((page: any) => page?.posts || []) || [];

  const isLoading = activeTab === 'qnas' ? isFetchingNextQnas : isFetchingNextPosts;
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
        if (entries[0].isIntersecting && !isLoading && hasNext) {
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
  }, [isLoading, fetchNext, hasNext]);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6 overflow-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">커뮤니티</h1>
          <p className="text-muted-foreground">약에 관한 정보를 공유하고 소통하는 공간입니다.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row mx-1">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="검색어를 입력하세요" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button asChild>
            {activeTab === 'qnas' ? (
              <Link href="/member/qnas/write">질문하기</Link>
            ) : (
              <Link href="/member/posts/write">글쓰기</Link>
            )}
          </Button>
        </div>

        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="qnas">전문가 Q&A</TabsTrigger>
            <TabsTrigger value="posts">자유게시판</TabsTrigger>
          </TabsList>
          <TabsContent value="qnas" className="mt-4">
            <div className="grid gap-4">
              {questions.length > 0 ? (
                questions.map((qna) => <QuestionCard key={qna.id} qna={qna} />)
              ) : (
                <div className="flex flex-col gap-4">
                  <QnaSkeleton />
                  <QnaSkeleton />
                  <QnaSkeleton />
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="posts" className="mt-4">
            <div className="grid gap-4">
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} post={post} />)
              ) : (
                <div className="flex flex-col gap-4">
                  <QnaSkeleton />
                  <QnaSkeleton />
                  <QnaSkeleton />
                </div>
              )}
            </div>
          </TabsContent>

          <div className="flex justify-center py-4" ref={loadMoreRef}>
            {isLoading && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
