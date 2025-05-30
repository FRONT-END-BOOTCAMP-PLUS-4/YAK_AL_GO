import { TagRepository } from '@/backend/domain/repositories/TagRepository';
import { Tag } from '@/backend/domain/entities/Tag';

export class GetAllTagsUseCase {
  constructor(private tagRepository: TagRepository) {}

  async execute(): Promise<Tag[]> {
    return this.tagRepository.findAll();
  }
}
