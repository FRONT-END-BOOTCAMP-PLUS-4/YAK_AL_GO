import { TagResponseDto } from '@/backend/application/usecases/tag/dto/TagDto';
import { AnswerResponseDto } from '@/backend/application/usecases/question/dto/AnswerDto';

export interface CreateQuestionDto {
  title: string;
  content: any;
  contentHTML: string;
  userId: string;
  tags: TagResponseDto[];
}

export interface QuestionResponseDto {
  id?: number;
  title: string;
  content: any;
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  user?: {
    id: string;
    name: string;
    email?: string;
    image: string;
    member_type?: number;
  };
  tags?: TagResponseDto[];
  answers: AnswerResponseDto[];
}
