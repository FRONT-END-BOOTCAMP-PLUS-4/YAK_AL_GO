import { Comment } from './Comment';
import { Tag } from './Tag';

export class Post {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date | null,
    public userId?: string,
    public postTags?: Tag[],
    public comments?: Comment[]
  ) {}
}
