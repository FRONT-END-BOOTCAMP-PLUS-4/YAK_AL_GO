import { PrismaClient } from '@prisma/client';
import { TagRepository } from '@/backend/domain/repositories/TagRepository';
import { Tag } from '@/backend/domain/entities/TagEntity';

export class PrismaTagRepository implements TagRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<Tag[]> {
    const tags = await this.prisma.tags.findMany();
    return tags.map((tag: { id: number; tagName: string }) => new Tag({ id: tag.id, name: tag.tagName }));
  }

  async findById(id: string): Promise<Tag | null> {
    const tag = await this.prisma.tags.findUnique({
      where: { id: Number(id) },
    });
    if (!tag) return null;
    return new Tag({ id: tag.id, name: tag.tagName });
  }

  async create(data: Tag): Promise<Tag> {
    const tag = await this.prisma.tags.create({
      data: {
        tagName: data.name,
      },
    });
    return {
      id: tag.id,
      name: tag.tagName,
    };
  }

  async update(id: string, data: Tag): Promise<Tag> {
    const tag = await this.prisma.tags.update({
      where: { id: Number(id) },
      data: {
        tagName: data.name,
      },
    });
    return {
      id: tag.id,
      name: tag.tagName,
    };
  }

  async delete(id: string): Promise<void> {
    await this.prisma.tags.delete({
      where: { id: Number(id) },
    });
  }
}
