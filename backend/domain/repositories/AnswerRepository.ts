import { Answer } from '@/backend/domain/entities/AnswerEntity';

export interface AnswerRepository {
  create(answer: Answer): Promise<Answer>;
}
