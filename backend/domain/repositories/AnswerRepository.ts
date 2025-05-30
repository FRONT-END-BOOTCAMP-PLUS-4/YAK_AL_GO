import { Answer } from '@/backend/domain/entities/Answer';

export interface AnswerRepository {
  create(answer: Answer): Promise<Answer>;
}
