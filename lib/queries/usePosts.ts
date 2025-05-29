import { useInfiniteQuery } from '@tanstack/react-query';
import { POSTS_QUERY_KEY } from '@/lib/constants/queryKeys';

const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(`/api/posts?page=${pageParam}&limit=10`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchInterval: 30000,
    refetchOnWindowFocus: true,
    staleTime: 60000,
  });
};
