import { useQuery } from '@tanstack/react-query';
import { Tag } from '@/backend/domain/entities/TagEntity';
import { TAGS_QUERY_KEY } from '@/lib/constants/queryKeys';

async function fetchTags(): Promise<Tag[]> {
  const response = await fetch('/api/tags');
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  return response.json();
}

export function useTags() {
  return useQuery({
    queryKey: TAGS_QUERY_KEY,
    queryFn: fetchTags,
  });
}
