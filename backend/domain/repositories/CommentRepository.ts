import { Comment } from '@/backend/domain/entities/Comment';

export interface CommentRepository {
  create(comment: Comment): Promise<Comment>;
  findByPostId(postId: number): Promise<Comment[]>;
}
