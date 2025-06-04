import { SerializedEditorState } from 'lexical';
import { Tag } from '@/backend/domain/entities/Tag';

export interface UpdatePostRequest {
  title: string;
  content: SerializedEditorState;
  contentHTML: string;
  tags: Tag[];
}

export interface UpdatePostResponse {
  id: number;
  title: string;
  content: SerializedEditorState;
  contentHTML: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

export const updatePost = async (id: number, data: UpdatePostRequest): Promise<UpdatePostResponse> => {
  let baseUrl = '';
  if (typeof window === 'undefined') {
    // Server-side: use environment variables or default to localhost
    baseUrl =
      process.env.NEXTAUTH_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      'http://localhost:3000';
  } else {
    // Client-side: use relative URL
    baseUrl = '';
  }

  const response = await fetch(`${baseUrl}/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '게시물 수정에 실패했습니다.');
  }

  return response.json();
};
