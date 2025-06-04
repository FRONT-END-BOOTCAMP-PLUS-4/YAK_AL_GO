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
        </div>
      )}
    </div>
  );
}

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
