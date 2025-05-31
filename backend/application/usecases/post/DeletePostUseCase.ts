import { PostRepository } from '@/backend/domain/repositories/PostRepository';

export class DeletePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(postId: number, userId: string): Promise<void> {
    // 게시물 존재 여부 확인
    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw new Error('게시물을 찾을 수 없습니다.');
    }

    // 게시물 작성자 확인
    if (post.userId !== userId) {
      throw new Error('게시물을 삭제할 권한이 없습니다.');
    }

    // 게시물 삭제 (댓글이 있어도 삭제 가능)
    await this.postRepository.delete(postId);
  }
}
