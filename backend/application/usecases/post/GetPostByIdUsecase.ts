import { PostRepository } from '@/backend/domain/repositories/PostRepository';
import { PostResponseDto } from '@/backend/application/usecases/post/dto/PostDto';

export class GetPostByIdUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(id: number): Promise<PostResponseDto | null> {
    // findById already includes tags and comment count through Prisma's include
    const post = await this.postRepository.findById(id);

    if (!post) {
      return null;
    }
    const postDto: PostResponseDto = {
      id: post.id,
      title: post.title,
      content: post.content,
      contentHTML: post.contentHTML,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      userId: post.userId,
      tags: post.tags || [],
      comments: post.comments || [],
    };
    return postDto;
  }
}
