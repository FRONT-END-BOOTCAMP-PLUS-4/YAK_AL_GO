import { Comment } from '@/backend/domain/entities/Comment';
import { User } from '@/backend/domain/entities/User';
import { CommentRepository } from '@/backend/domain/repositories/CommentRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaCommentRepository implements CommentRepository {
  constructor(private prisma: PrismaClient) {}

  async create(comment: Comment): Promise<Comment> {
    const created = await this.prisma.comments.create({
      data: {
        content: comment.content,
        userId: comment.userId,
        postId: comment.postId,
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            member_type: true,
          },
        },
      },
    });
    return this.mapToEntity(created);
  }

  async findByPostId(postId: number): Promise<Comment[]> {
    const comments = await this.prisma.comments.findMany({
      where: { postId, deletedAt: null },
      orderBy: { createdAt: 'asc' },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            member_type: true,
          },
        },
      },
    });
    return comments.map(this.mapToEntity);
  }

  async findAll(options: { page: number; limit: number }): Promise<{ comments: Comment[]; hasMore: boolean }> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      this.prisma.comments.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          users: {
            select: {
              id: true,
              name: true,
              email: true,
              photo: true,
              member_type: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.comments.count({
        where: {
          deletedAt: null,
        },
      }),
    ]);

    const hasMore = skip + limit < total;

    return {
      comments: comments.map(this.mapToEntity),
      hasMore,
    };
  }

  async findById(id: number): Promise<Comment | null> {
    const prismaComment = await this.prisma.comments.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            member_type: true,
          },
        },
      },
    });

    return prismaComment ? this.mapToEntity(prismaComment) : null;
  }

  async update(id: number, comment: Comment): Promise<Comment> {
    const updated = await this.prisma.comments.update({
      where: { id },
      data: {
        content: comment.content,
        updatedAt: new Date(),
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            photo: true,
            member_type: true,
          },
        },
      },
    });
    return this.mapToEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.comments.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  private mapToEntity(prismaComment: any): Comment {
    return new Comment({
      id: prismaComment.id,
      content: prismaComment.content,
      createdAt: prismaComment.createdAt,
      updatedAt: prismaComment.updatedAt,
      deletedAt: prismaComment.deletedAt,
      userId: prismaComment.userId,
      user: prismaComment.users
        ? new User({
            id: prismaComment.users.id,
            name: prismaComment.users.name,
            email: prismaComment.users.email,
            image: prismaComment.users.photo || '',
            member_type: prismaComment.users.member_type,
          })
        : undefined,
      postId: prismaComment.postId,
    });
  }
}
