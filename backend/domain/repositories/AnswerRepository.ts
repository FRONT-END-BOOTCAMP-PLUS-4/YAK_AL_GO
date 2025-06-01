import { Answer } from '@/backend/domain/entities/Answer';

export interface AnswerRepository {
  create(answer: Answer): Promise<Answer>;
  findById(id: number): Promise<Answer | null>;
  update(id: number, answer: Answer): Promise<Answer>;
  delete(id: number): Promise<void>;
}
