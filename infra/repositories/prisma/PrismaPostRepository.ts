import { PostRepository } from '../../../domain/repositories/PostRepository';
import { Post } from '../../../domain/entities/Post';
import prisma from '../../../lib/prisma';
import { Prisma } from '@prisma/generated';

export class PrismaPostRepository implements PostRepository {
  async findById(id: number): Promise<Post | null> {
    return await prisma.post.findUnique({ where: { id } });
  }

  async findPostsAfter(id: number, limit: number): Promise<Post[]> {
    return await prisma.post.findMany({ where: { id: { gt: id } }, take: limit });
  }

  async save(post: Post): Promise<Post> {
    if (!post.title || !post.content || !post.user) {
      throw new Error('Title, content, and user are required');
    }

    const { id, postTags, comments, commentCount, user, ...data } = post;
    const createData: Prisma.PostCreateInput = {
      title: post.title,
      content: post.content,
      user: { connect: { id: user } },
      postTags: postTags
        ? {
            create: postTags.map((tagId) => ({
              tag: { connect: { id: parseInt(tagId) } },
            })),
          }
        : undefined,
    };
    return await prisma.post.create({ data: createData });
  }

  async update(post: Post): Promise<Post> {
    if (!post.id || !post.user) {
      throw new Error('Id and user are required for update');
    }

    const { id, postTags, comments, commentCount, user, ...data } = post;
    const updateData: Prisma.PostUpdateInput = {
      ...data,
      user: { connect: { id: user } },
      postTags: postTags
        ? {
            deleteMany: {},
            create: postTags.map((tagId) => ({
              tag: { connect: { id: parseInt(tagId) } },
            })),
          }
        : undefined,
    };
    return await prisma.post.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteById(id: number): Promise<void> {
    await prisma.post.delete({ where: { id } });
  }
}
