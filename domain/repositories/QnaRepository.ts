import { Qna } from '../entities/Qna';

export interface QnaRepository {
  findById(id: number): Promise<Qna | null>;
  save(qna: Qna): Promise<Qna>;
  update(qna: Qna): Promise<Qna>;
  deleteById(id: number): Promise<void>;
}
