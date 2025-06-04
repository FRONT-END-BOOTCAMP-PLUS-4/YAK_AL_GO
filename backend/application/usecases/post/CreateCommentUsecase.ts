import { Comment } from '@/backend/domain/entities/Comment';
import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';
import { PostRepository } from '@/backend/domain/repositories/PostRepository';
import { CommentResponseDto } from '@/backend/application/usecases/post/dto/CommentDto';
import { CreateCommentDto } from '@/backend/application/usecases/post/dto/CommentDto';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class CreateCommentUsecase {
  constructor(
    private commentRepository: CommentRepository,
    private postRepository?: PostRepository,
    private algoliaSyncUseCase?: AlgoliaSyncUseCase
  ) {}

  async execute(dto: CreateCommentDto): Promise<CommentResponseDto> {
    const comment = new Comment({
      content: dto.content,
      userId: dto.userId,
      postId: dto.postId,
    });

    const created = await this.commentRepository.create(comment);

    // Update post with new comment in Algolia
    if (this.algoliaSyncUseCase && created.id && this.postRepository) {
      const post = await this.postRepository.findById(dto.postId);

      if (post) {
        // 해당 게시물의 모든 댓글을 다시 가져와서 Algolia에 동기화
        const comments = await this.commentRepository.findByPostId(dto.postId);
        await this.algoliaSyncUseCase.updatePost(post, comments);
      }
    }

    return {
      id: created.id,
      content: created.content,
      userId: created.userId,
      postId: created.postId,
    };
  }
}
