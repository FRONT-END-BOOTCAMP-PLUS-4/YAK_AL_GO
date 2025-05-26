import { Tag } from '@/backend/domain/entities/TagEntity';
import { CreateTagDto } from '@/backend/application/usecases/tag/dto/TagDto';

export interface TagRepository {
  findAll(): Promise<Tag[]>;
  findById(id: string): Promise<Tag | null>;
  create(data: CreateTagDto): Promise<Tag>;
  delete(id: string): Promise<void>;
}
