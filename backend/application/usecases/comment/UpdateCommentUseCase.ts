import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';
import { Comment } from '@/backend/domain/entities/Comment';

export interface UpdateCommentDto {
  content: string;
}

export class UpdateCommentUseCase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(commentId: number, userId: string, dto: UpdateCommentDto): Promise<Comment> {
    // 댓글 존재 여부 확인
    const existingComment = await this.commentRepository.findById(commentId);
    if (!existingComment) {
      throw new Error('댓글을 찾을 수 없습니다.');
    }

    // 댓글 작성자 확인
    if (existingComment.userId !== userId) {
      throw new Error('댓글을 수정할 권한이 없습니다.');
    }

    // 댓글 수정
    const updatedComment = new Comment({
      id: commentId,
      content: dto.content,
      userId: existingComment.userId,
      postId: existingComment.postId,
      createdAt: existingComment.createdAt,
      updatedAt: new Date(),
    });

    return await this.commentRepository.update(commentId, updatedComment);
  }
}
