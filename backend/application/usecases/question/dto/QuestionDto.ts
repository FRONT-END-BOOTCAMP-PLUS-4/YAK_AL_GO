import { TagResponseDto } from '@/backend/application/usecases/tag/dto/TagDto';
import { AnswerResponseDto } from '@/backend/application/usecases/question/dto/AnswerDto';

export interface CreateQuestionDto {
  title: string;
  content: any;
  content_html: string;
  userId: string;
  tags: TagResponseDto[];
}

export interface QuestionResponseDto {
  id?: number;
  title: string;
  content: any;
  content_html: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  tags: TagResponseDto[];
  answers: AnswerResponseDto[];
}
