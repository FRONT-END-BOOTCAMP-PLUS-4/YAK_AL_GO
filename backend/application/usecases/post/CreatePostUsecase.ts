import { Post } from '@/backend/domain/entities/Post';
import { PostRepository } from '@/backend/domain/repositories/PostRepository';
import { CreatePostDto, PostResponseDto } from '@/backend/application/usecases/post/dto/PostDto';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class CreatePostUseCase {
  constructor(private postRepository: PostRepository, private algoliaSyncUseCase?: AlgoliaSyncUseCase) {}

  async execute(dto: CreatePostDto): Promise<PostResponseDto> {
    const post = new Post({
      title: dto.title,
      content: dto.content,
      contentHTML: dto.contentHTML,
      userId: dto.userId,
    });

    const created = await this.postRepository.create(post);
    if (created.id) {
      await this.postRepository.addTags(created.id, dto.tags);

      // Get the full post with tags for Algolia sync
      const fullPost = await this.postRepository.findById(created.id);
      if (fullPost && this.algoliaSyncUseCase) {
        await this.algoliaSyncUseCase.syncPost(fullPost, []);
      }
    }

    return {
      id: created.id,
      title: created.title,
      content: created.content,
      contentHTML: created.contentHTML,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
      userId: created.userId,
      comments: [],
    };
  }
}
