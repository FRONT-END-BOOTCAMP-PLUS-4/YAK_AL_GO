import { Answer } from './Answer';
import { Tag } from './Tag';

export class Qna {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date | null,
    public userId?: string,
    public qnaTags?: Tag[],
    public answers?: Answer[]
  ) {}
}
