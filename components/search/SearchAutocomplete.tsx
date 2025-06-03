'use client';

import { AutocompleteOptions, AutocompleteState, createAutocomplete } from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { Hit } from '@algolia/client-search';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, MessageCircle, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

type AutocompleteItem = Hit<{
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
}>;

interface SearchAutocompleteProps {
  placeholder?: string;
  activeTab?: 'qnas' | 'posts';
}

export function SearchAutocomplete({
  placeholder = '검색어를 입력하세요',
  activeTab = 'qnas',
}: SearchAutocompleteProps) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({} as any);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const autocomplete = createAutocomplete<AutocompleteItem>({
    onStateChange({ state }) {
      setAutocompleteState(state);
    },
    getSources() {
      return [
        {
          sourceId: 'search-results',
          getItems({ query }) {
            if (!query) {
              return [];
            }

            // 현재 탭에 따라 필터링
            const filters = activeTab === 'qnas' ? 'type:question' : 'type:post';

            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'yak_al_go_search',
                  query,
                  params: {
                    filters,
                    hitsPerPage: 8,
                    attributesToHighlight: ['title', 'content'],
                    attributesToSnippet: ['content:100'],
                  },
                },
              ],
            });
          },
          templates: {
            item({ item }: { item: AutocompleteItem }) {
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

              const getLink = () => {
                switch (item.type) {
                  case 'post':
                    return `/community/posts/${item.objectID.replace('post_', '')}`;
                  case 'question':
                    return `/community/qnas/${item.objectID.replace('question_', '')}`;
                  default:
                    return '#';
                }
              };

              const getDisplayTitle = () => {
                if (item.title) return item.title;
                return `${getTypeLabel(item.type)}`;
              };

              const createdDate = new Date(item.createdAt * 1000);

              return (
                <Link href={getLink()} className="block">
                  <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
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

                      <h4
                        className="font-medium text-sm line-clamp-1 mb-1"
                        dangerouslySetInnerHTML={{
                          __html: (item as any)._highlightResult?.title?.value || getDisplayTitle(),
                        }}
                      />

                      <p
                        className="text-xs text-gray-600 line-clamp-2 mb-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            (item as any)._snippetResult?.content?.value || item.content.substring(0, 100) + '...',
                        }}
                      />

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
                          {item.tags.slice(0, 3).map((tag: string, index: number) => (
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
            },
          },
        },
      ];
    },
  });

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return;
    }

    const { getEnvironmentProps } = autocomplete;

    const environmentProps = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    Object.assign(window, environmentProps);

    return () => {
      Object.keys(environmentProps).forEach((key) => {
        delete (window as any)[key];
      });
    };
  }, [autocomplete]);

  return (
    <div className="relative">
      <form ref={formRef} className="relative">
        <input
          ref={inputRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder={placeholder}
        />
      </form>

      {autocompleteState.isOpen && (
        <div
          ref={panelRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {autocompleteState.collections?.map((collection, index) => {
            const { source, items } = collection;

            return (
              <div key={`source-${index}`}>
                {items.length > 0 && (
                  <div className="p-2">
                    <div className="text-xs text-gray-500 mb-2 px-2">{items.length}개의 검색 결과</div>
                    <ul>
                      {items.map((item) => (
                        <li key={item.objectID}>{source.templates.item({ item })}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {items.length === 0 && autocompleteState.query && (
                  <div className="p-4 text-center text-gray-500 text-sm">검색 결과가 없습니다.</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
