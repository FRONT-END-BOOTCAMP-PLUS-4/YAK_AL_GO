import { Comment } from '@/backend/domain/entities/Comment';

export interface CommentRepository {
  create(comment: Comment): Promise<Comment>;
  findByPostId(postId: number): Promise<Comment[]>;
  findById(id: number): Promise<Comment | null>;
  update(id: number, comment: Comment): Promise<Comment>;
  delete(id: number): Promise<void>;
}
