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
      user: post.user
        ? {
            id: post.user.id,
            name: post.user.name,
            email: post.user.email,
            image: post.user.image,
            member_type: post.user.member_type,
          }
        : undefined,
      tags: post.tags || [],
      comments:
        post.comments?.map((comment) => ({
          id: comment.id,
          content: comment.content,
          userId: comment.userId,
          postId: id,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
          users: comment.user
            ? {
                id: comment.user.id,
                name: comment.user.name,
                image: comment.user.image,
                member_type: comment.user.member_type || 0,
              }
            : undefined,
        })) || [],
    };
    return postDto;
  }
}
