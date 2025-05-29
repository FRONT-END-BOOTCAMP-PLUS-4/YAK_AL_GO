import { Question, QuestionResponse } from '@/backend/domain/entities/QuestionEntity';
import { Tag } from '@/backend/domain/entities/TagEntity';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedQuestions {
  questions: QuestionResponse[];
  hasMore: boolean;
  total: number;
}

export interface QuestionRepository {
  create(question: Question): Promise<Question>;
  findById(id: number): Promise<Question | null>;
  findAll(params: PaginationParams): Promise<PaginatedQuestions>;
  addTags(questionId: number, tags: Tag[]): Promise<void>;
}
