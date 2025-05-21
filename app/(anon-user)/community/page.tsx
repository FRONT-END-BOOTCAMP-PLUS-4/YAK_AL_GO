'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, MessageSquare, User, Clock, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const dummyQnas = [
  {
    id: 1,
    title: '타이레놀과 아스피린을 함께 복용해도 될까요?',
    content: '두통이 심해서 타이레놀과 아스피린을 함께 복용해도 괜찮을지 궁금합니다.',
    author: 'user1',
    date: '2023-05-10',
    tags: ['진통제', '복용법'],
    answers: 2,
  },
  {
    id: 2,
    title: '소아 감기약 추천 부탁드립니다.',
    content: '5세 아이가 감기에 걸렸는데 어떤 약을 먹이면 좋을까요?',
    author: 'user2',
    date: '2023-05-08',
    tags: ['소아', '감기약'],
    answers: 3,
  },
  {
    id: 3,
    title: '항생제 복용 후 유산균 섭취 시간',
    content: '항생제 복용 후 유산균은 얼마나 시간을 두고 먹어야 효과적인가요?',
    author: 'user3',
    date: '2023-05-05',
    tags: ['항생제', '유산균'],
    answers: 1,
  },
];

// Mock data for community posts
const dummyPosts = [
  {
    id: 4,
    title: '혈압약 부작용 경험 공유해주세요.',
    content: '최근 혈압약을 처방받았는데 부작용이 있으신 분들 경험 공유 부탁드립니다.',
    author: 'user4',
    date: '2023-05-03',
    tags: ['혈압약', '부작용'],
    answers: 5,
  },
  {
    id: 5,
    title: '비타민 추천 부탁드립니다.',
    content: '요즘 피로감이 심한데 어떤 비타민이 좋을까요?',
    author: 'user5',
    date: '2023-05-01',
    tags: ['비타민', '영양제'],
    answers: 4,
  },
  {
    id: 6,
    title: '두통약 추천해주세요.',
    content: '만성 두통이 있는데 효과 좋은 두통약 추천 부탁드립니다.',
    author: 'user6',
    date: '2023-04-28',
    tags: ['두통', '진통제'],
    answers: 3,
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('qnas');
  const [qnas, setQnas] = useState(dummyQnas);
  const [posts, setPosts] = useState(dummyPosts);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = async () => {
    setIsLoading(true);
    try {
      // TODO: 실제 API 호출로 대체
      // const response = await fetch(`/api/posts?type=${activeTab}&page=${page}`);
      // const newPosts = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

      // 임시로 기존 데이터를 복제하여 추가
      if (activeTab === 'qnas') {
        setQnas((prev) => [...prev, ...qnas]);
      } else {
        setPosts((prev) => [...prev, ...posts]);
      }
    } catch (error) {
      console.error('Failed to load more posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMorePosts();
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
  }, [isLoading, loadMorePosts]);

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6 overflow-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">커뮤니티</h1>
          <p className="text-muted-foreground">약에 관한 정보를 공유하고 소통하는 공간입니다.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="검색어를 입력하세요" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button asChild>
            <Link href="/community/write">글쓰기</Link>
          </Button>
        </div>

        <Tabs defaultValue="qnas" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList>
            <TabsTrigger value="qnas">전문가 Q&A</TabsTrigger>
            <TabsTrigger value="posts">자유게시판</TabsTrigger>
          </TabsList>
          <TabsContent value="qnas" className="mt-4">
            <div className="grid gap-4">
              {qnas.map((qna, index) => (
                <Link href={`/qnas/${qna.id}`} key={qna.id}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="default" className="bg-primary">
                              전문가 Q&A
                            </Badge>
                            <div className="flex flex-wrap gap-1">
                              {qna.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg">
                            {qna.title} {index}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{qna.content}</p>
                          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {qna.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {qna.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              답변 {qna.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="posts" className="mt-4">
            <div className="grid gap-4">
              {posts.map((post, index) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">자유게시판</Badge>
                            <div className="flex flex-wrap gap-1">
                              {post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg">{post.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.content}</p>
                          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              댓글 {post.answers}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
