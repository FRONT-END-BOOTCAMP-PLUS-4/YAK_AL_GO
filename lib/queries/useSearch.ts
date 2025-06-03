import { useState, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

interface SearchFilters {
  type?: 'post' | 'question' | 'answer' | 'comment';
  userId?: string;
  tags?: string[];
  isAccepted?: boolean;
}

interface SearchResult {
  hits: any[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}

interface UseSearchParams {
  query: string;
  filters?: SearchFilters;
  hitsPerPage?: number;
  enabled?: boolean;
}

export function useSearch({ query, filters, hitsPerPage = 20, enabled = true }: UseSearchParams) {
  const [isSearching, setIsSearching] = useState(false);

  const searchQuery = useInfiniteQuery<SearchResult>({
    queryKey: ['search', query, filters],
    queryFn: async ({ pageParam }) => {
      const currentPage = pageParam as number;

      if (!query.trim()) {
        return { hits: [], nbHits: 0, page: 0, nbPages: 0, hitsPerPage, processingTimeMS: 0, query: '' };
      }

      const searchParams = new URLSearchParams({
        q: query,
        page: currentPage.toString(),
        hitsPerPage: hitsPerPage.toString(),
      });

      // Add filters to search params
      if (filters?.type) {
        searchParams.append('type', filters.type);
      }
      if (filters?.userId) {
        searchParams.append('userId', filters.userId);
      }
      if (filters?.tags && filters.tags.length > 0) {
        searchParams.append('tags', filters.tags.join(','));
      }
      if (filters?.isAccepted !== undefined) {
        searchParams.append('isAccepted', filters.isAccepted.toString());
      }

      const response = await fetch(`/api/search?${searchParams.toString()}`);

      if (!response.ok) {
        throw new Error('검색 중 오류가 발생했습니다.');
      }

      return response.json() as Promise<SearchResult>;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: SearchResult) => {
      if (lastPage.page < lastPage.nbPages - 1) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    enabled: enabled && query.trim().length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const search = useCallback(
    async (searchQuery: string, searchFilters?: SearchFilters) => {
      setIsSearching(true);
      try {
        const searchParams = new URLSearchParams({
          q: searchQuery,
          page: '0',
          hitsPerPage: hitsPerPage.toString(),
        });

        if (searchFilters?.type) {
          searchParams.append('type', searchFilters.type);
        }
        if (searchFilters?.userId) {
          searchParams.append('userId', searchFilters.userId);
        }
        if (searchFilters?.tags && searchFilters.tags.length > 0) {
          searchParams.append('tags', searchFilters.tags.join(','));
        }
        if (searchFilters?.isAccepted !== undefined) {
          searchParams.append('isAccepted', searchFilters.isAccepted.toString());
        }

        const response = await fetch(`/api/search?${searchParams.toString()}`);

        if (!response.ok) {
          throw new Error('검색 중 오류가 발생했습니다.');
        }

        return response.json() as Promise<SearchResult>;
      } finally {
        setIsSearching(false);
      }
    },
    [hitsPerPage]
  );

  // Extract search results from pages
  const searchResults = searchQuery.data?.pages.flatMap((page) => page.hits) || [];

  return {
    ...searchQuery,
    search,
    isSearching,
    searchResults,
    totalHits: searchQuery.data?.pages[0]?.nbHits || 0,
    processingTime: searchQuery.data?.pages[0]?.processingTimeMS || 0,
  };
}
