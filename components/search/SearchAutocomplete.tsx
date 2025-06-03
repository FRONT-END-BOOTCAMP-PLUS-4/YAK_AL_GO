<<<<<<< HEAD
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Configure,
  useSearchBox,
  Highlight,
  Snippet,
} from 'react-instantsearch';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

function AutocompleteHit({ hit }: { hit: any }) {
  const getLinkHref = () => {
    if (hit.type === 'question' && hit.objectID) {
      return `/community/qnas/${hit.objectID.replace('question_', '')}`;
    } else if (hit.type === 'post' && hit.objectID) {
      return `/community/posts/${hit.objectID.replace('post_', '')}`;
    }
    return '#';
  };

  return (
    <Link href={getLinkHref()} passHref legacyBehavior>
      <a className="group w-full hover:bg-gray-50 transition cursor-pointer flex items-start gap-3 border-b border-gray-100 px-4 py-3">
        {/* 프로필 이미지 */}
        <div className="flex-shrink-0">
          {hit.userProfileImage ? (
            <img
              src={hit.userProfileImage}
              alt="User profile"
              className="w-11 h-11 rounded-full object-cover border border-gray-200"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>

        {/* 텍스트 콘텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-800 truncate">
            <Highlight hit={hit} attribute="title" />
          </div>
          {hit.content && (
            <div className="text-xs text-gray-500 leading-snug mt-1 line-clamp-2">
              <Snippet hit={hit} attribute="content" />
            </div>
          )}
          {hit.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {hit.tags.slice(0, 3).map((tag: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                  {tag}
                </div>
              ))}
              {hit.tags.length > 3 && <span className="text-xs text-gray-400">+{hit.tags.length - 3}</span>}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}

function CustomSearchBox() {
  const { query, refine } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setInputValue(query), [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    refine(value);
    setIsOpen(value.length > 0);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (inputValue.length > 0) setIsOpen(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      if (!document.activeElement?.closest('.autocomplete-dropdown')) setIsOpen(false);
    }, 150);
  };

  const handleClear = () => {
    setInputValue('');
    refine('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center bg-white shadow-sm rounded-sm px-4 py-2 border ${
          isFocused ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-300'
        }`}>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="검색어를 입력하세요"
          className="flex-1 px-3 py-0.5 text-sm focus:outline-none bg-transparent"
        />
        {inputValue && (
          <button onClick={handleClear} className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="autocomplete-dropdown absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 text-xs text-gray-500 flex-shrink-0">
            <Stats />
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Live</span>
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            <Hits hitComponent={AutocompleteHit} />
          </div>

          <div className="text-xs text-gray-400 px-4 py-2 border-t border-gray-100 flex items-center justify-center gap-2 flex-shrink-0">
            <span>Powered by</span>
            <span className="text-blue-600 font-medium">Algolia</span>
          </div>
=======
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
>>>>>>> 7b31cd9 ([feat/#102] refactor: simple algolia search)
        </div>
      )}
    </div>
  );
}
<<<<<<< HEAD

export function SearchAutocomplete() {
  return (
    <div className="w-full">
      <InstantSearch searchClient={searchClient} indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}>
        <Configure hitsPerPage={6} attributesToSnippet={['content:80']} snippetEllipsisText="..." />
        <CustomSearchBox />
      </InstantSearch>
    </div>
  );
}
=======
>>>>>>> 7b31cd9 ([feat/#102] refactor: simple algolia search)
