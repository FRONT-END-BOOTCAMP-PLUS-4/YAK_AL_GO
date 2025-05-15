import { TagRepository } from '../../../domain/repositories/TagRepository';
import prisma from '../../../lib/prisma';
export class PrismaTagRepository implements TagRepository {
  async existsByIds(tagIds: string[]): Promise<boolean> {
    const tags = await prisma.tag.findMany({
      where: {
        id: { in: tagIds.map(Number) },
      },
    });
    return tags.length === tagIds.length;
  }
}
