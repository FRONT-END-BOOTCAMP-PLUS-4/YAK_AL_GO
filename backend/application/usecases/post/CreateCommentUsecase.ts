import { Comment } from '@/backend/domain/entities/Comment';
import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';
import { CommentResponseDto } from '@/backend/application/usecases/post/dto/CommentDto';
import { CreateCommentDto } from '@/backend/application/usecases/post/dto/CommentDto';

export class CreateCommentUsecase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(dto: CreateCommentDto): Promise<CommentResponseDto> {
    const comment = new Comment({
      content: dto.content,
      userId: dto.userId,
      postId: dto.postId,
    });

    const created = await this.commentRepository.create(comment);
    return {
      id: created.id,
      content: created.content,
      userId: created.userId,
      postId: created.postId,
    };
  }
}
