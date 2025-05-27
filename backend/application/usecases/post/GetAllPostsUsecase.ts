import { PostRepository } from '@/backend/domain/repositories/PostRepository';
import { PaginationParams, PaginatedPosts } from '@/backend/domain/repositories/PostRepository';

export class GetAllPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(params: PaginationParams): Promise<PaginatedPosts> {
    return this.postRepository.findAll(params);
  }
}
