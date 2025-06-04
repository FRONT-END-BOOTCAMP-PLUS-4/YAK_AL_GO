import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';
import { PostRepository } from '@/backend/domain/repositories/PostRepository';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class DeleteCommentUseCase {
  constructor(
    private commentRepository: CommentRepository,
    private postRepository?: PostRepository,
    private algoliaSyncUseCase?: AlgoliaSyncUseCase
  ) {}

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

    // Update post with updated comments in Algolia
    if (this.algoliaSyncUseCase && this.postRepository) {
      const post = await this.postRepository.findById(existingComment.postId);
      if (post) {
        // 해당 게시물의 모든 댓글을 다시 가져와서 Algolia에 동기화
        const comments = await this.commentRepository.findByPostId(existingComment.postId);
        await this.algoliaSyncUseCase.updatePost(post, comments);
      }
    }
  }
}
