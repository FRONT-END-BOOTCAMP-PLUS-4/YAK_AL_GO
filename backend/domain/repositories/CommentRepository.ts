import { Comment } from '@/backend/domain/entities/CommentEntity';

export interface CommentRepository {
  create(comment: Comment): Promise<Comment>;
  findByPostId(postId: number): Promise<Comment[]>;
}
