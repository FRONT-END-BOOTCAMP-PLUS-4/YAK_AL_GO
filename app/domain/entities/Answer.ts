import { User } from './User';
import { Qna } from './Qna';

export class Answer {
  constructor(
    public id?: number,
    public content?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date | null,
    public isAccepted?: boolean,
    public userId?: string,
    public qnaId?: number
  ) {}
}
