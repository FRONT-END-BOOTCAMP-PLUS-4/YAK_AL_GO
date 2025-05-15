import { Comment } from '../entities/Comment';

export interface CommentRepository {
  findById(id: number): Promise<Comment | null>;
  save(comment: Comment): Promise<Comment>;
  update(comment: Comment): Promise<Comment>;
  deleteById(id: number): Promise<void>;
  countByPostId(postId: number): Promise<number>;
  findByPostId(postId: number, page: number, limit: number): Promise<Comment[]>;
}
