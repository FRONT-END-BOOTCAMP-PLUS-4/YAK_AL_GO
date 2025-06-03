'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, MessageCircle, Calendar, Search } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchResult {
  objectID: string;
  type: 'post' | 'question' | 'answer' | 'comment';
  title?: string;
  content: string;
  createdAt: number;
  userId: string;
  userName?: string;
  userProfileImage?: string;
  tags?: string[];
  commentCount?: number;
  answerCount?: number;
  isAccepted?: boolean;
  questionId?: number;
  questionTitle?: string;
  postId?: number;
  postTitle?: string;
  _highlightResult?: any;
  _snippetResult?: any;
}

interface SimpleSearchProps {
  placeholder?: string;
  activeTab?: 'qnas' | 'posts';
}

export function SimpleSearch({ placeholder = '검색어를 입력하세요', activeTab = 'qnas' }: SimpleSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [processingTime, setProcessingTime] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  // 검색 실행
  const searchAlgolia = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setIsLoading(true);
      try {
        const typeFilter = activeTab === 'qnas' ? 'question' : 'post';
        const searchParams = new URLSearchParams({
          q: searchQuery,
          type: typeFilter,
          hitsPerPage: '8',
        });

        const response = await fetch(`/api/search?${searchParams.toString()}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data.hits || []);
          setProcessingTime(data.processingTimeMS || 0);
          setIsOpen(true);
        }
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [activeTab]
  );

  // 디바운스된 쿼리로 검색
  useEffect(() => {
    searchAlgolia(debouncedQuery);
  }, [debouncedQuery, searchAlgolia]);

  // 외부 클릭 시 결과 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'post':
        return 'bg-blue-100 text-blue-800';
      case 'question':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'post':
        return '게시글';
      case 'question':
        return '질문';
      default:
        return type;
    }
  };

  const getLink = (item: SearchResult) => {
    switch (item.type) {
      case 'post':
        return `/community/posts/${item.objectID.replace('post_', '')}`;
      case 'question':
        return `/community/qnas/${item.objectID.replace('question_', '')}`;
      default:
        return '#';
    }
  };

  const getDisplayTitle = (item: SearchResult) => {
    if (item.title) return item.title;
    return `${getTypeLabel(item.type)}`;
  };

  const getSnippet = (item: SearchResult) => {
    // HTML 태그 제거 후 스니펫 생성 (블로그 방식 참고)
    const cleanContent = item.content.replace(/(<([^>]+)>)/gi, '');
    return cleanContent.length > 100 ? `${cleanContent.substring(0, 100)}...` : cleanContent;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pr-10"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-gray-500">검색 중...</div>
          ) : results.length > 0 ? (
            <div className="p-2">
              <div className="text-xs text-gray-500 mb-2 px-2">
                {results.length}개의 검색 결과 ({processingTime}ms)
              </div>
              {results.map((item) => {
                const createdDate = new Date(item.createdAt * 1000);

                return (
                  <Link
                    key={item.objectID}
                    href={getLink(item)}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}>
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={item.userProfileImage} />
                        <AvatarFallback className="text-xs">
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className={`text-xs ${getTypeColor(item.type)}`}>
                            {getTypeLabel(item.type)}
                          </Badge>
                          {item.isAccepted && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              채택됨
                            </Badge>
                          )}
                        </div>

                        <h4 className="font-medium text-sm line-clamp-1 mb-1">{getDisplayTitle(item)}</h4>

                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">{getSnippet(item)}</p>

                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{item.userName || '익명'}</span>
                          {item.commentCount !== undefined && (
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{item.commentCount}</span>
                            </div>
                          )}
                          {item.answerCount !== undefined && (
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{item.answerCount}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {formatDistanceToNow(createdDate, {
                                addSuffix: true,
                                locale: ko,
                              })}
                            </span>
                          </div>
                        </div>

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            query && <div className="p-4 text-center text-gray-500 text-sm">검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}
