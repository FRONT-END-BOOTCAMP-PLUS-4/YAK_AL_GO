import { User } from './User';
import { Post } from './Post';

export class Comment {
  constructor(
    public id?: number,
    public content?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date | null,
    public userId?: string,
    public postId?: number
  ) {}
}
