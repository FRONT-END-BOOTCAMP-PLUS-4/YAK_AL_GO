import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';

export class DeleteCommentUseCase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(commentId: number, userId: string): Promise<void> {
    // 댓글 존재 여부 확인
    const existingComment = await this.commentRepository.findById(commentId);
    if (!existingComment) {
      throw new Error('댓글을 찾을 수 없습니다.');
    }

    // 댓글 작성자 확인
    if (existingComment.userId !== userId) {
      throw new Error('댓글을 삭제할 권한이 없습니다.');
    }

    // 댓글 삭제 (소프트 삭제)
    await this.commentRepository.delete(commentId);
  }
}
