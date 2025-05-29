import { Post, PostResponse } from '@/backend/domain/entities/PostEntity';
import { Tag } from '@/backend/domain/entities/TagEntity';
import { PaginationParams, PaginatedPosts, PostRepository } from '@/backend/domain/repositories/PostRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaClient) {}

  async create(post: Post): Promise<Post> {
    const created = await this.prisma.posts.create({
      data: {
        title: post.title,
        content: post.content,
        contentHTML: post.contentHTML,
        userId: post.userId,
      },
    });

    return new Post({
      id: created.id,
      title: created.title,
      content: created.content,
      contentHTML: created.contentHTML,
      createdAt: created.createdAt,
      userId: created.userId,
      comments: created.comments,
    });
  }

  async addTags(postId: number, tags: Tag[]): Promise<void> {
    await this.prisma.posts_tags.createMany({
      data: tags.map((t) => ({
        postId: postId,
        tagId: t.id,
      })),
    });
  }

  async findById(id: number): Promise<Post | null> {
    const post = await this.prisma.posts.findUnique({
      where: { id },
      include: {
        postTags: {
          include: {
            tags: true,
          },
        },
        comments: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            users: {
              select: {
                id: true,
                name: true,
                member_type: true,
              },
            },
          },
        },
      },
    });

    if (!post) return null;

    return new Post({
      id: post.id,
      title: post.title,
      content: post.content,
      contentHTML: post.contentHTML,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      userId: post.userId,
      tags: post.postTags?.map((pt: any) => new Tag({ id: pt.tags.id, name: pt.tags.tagName })),
      comments: post.comments,
    });
  }

  async findAll(params: PaginationParams): Promise<PaginatedPosts> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      this.prisma.posts.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' },
        take: limit + 1, // fetch one extra to determine if there are more items
        skip,
        include: {
          postTags: {
            include: {
              tags: true,
            },
          },
          _count: {
            select: {
              comments: true,
            },
          },
        },
      }),
      this.prisma.posts.count({
        where: { deletedAt: null },
      }),
    ]);

    const hasMore = posts.length > limit;
    const items = hasMore ? posts.slice(0, -1) : posts;

    return {
      posts: items.map(
        (p: any) =>
          new PostResponse({
            id: p.id,
            title: p.title,
            content: p.content,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
            userId: p.userId,
            tags: p.postTags?.map((pt: any) => new Tag({ id: pt.tags.id, name: pt.tags.tagName })),
            commentCount: p._count.comments,
          })
      ),
      hasMore,
      total,
    };
  }
}
