import { Tag } from '../entities/Tag';

export interface TagRepository {
  existsByIds(tagIds: string[]): Promise<boolean>;
}
