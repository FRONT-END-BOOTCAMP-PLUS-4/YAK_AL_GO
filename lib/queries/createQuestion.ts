import { SerializedEditorState } from 'lexical';
import { Tag } from '@/backend/domain/entities/Tag';

export interface CreateQuestionRequest {
  title: string;
  content: SerializedEditorState;
  contentHTML: string;
  tags: Tag[];
}

export interface CreateQuestionResponse {
  id: number;
  title: string;
  content: SerializedEditorState;
  contentHTML: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

export const createQuestion = async (data: CreateQuestionRequest): Promise<CreateQuestionResponse> => {
  const response = await fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '질문 생성에 실패했습니다.');
  }

  return response.json();
};
