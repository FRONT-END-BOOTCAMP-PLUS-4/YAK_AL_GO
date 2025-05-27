import { Comment } from '@/backend/domain/entities/CommentEntity';
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
            member_type: true,
          },
        },
      },
    });
    return comments.map(this.mapToEntity);
  }

  private mapToEntity(prismaComment: any): Comment {
    return new Comment({
      id: prismaComment.id,
      content: prismaComment.content,
      createdAt: prismaComment.createdAt,
      updatedAt: prismaComment.updatedAt,
      deletedAt: prismaComment.deletedAt,
      userId: prismaComment.userId,
      postId: prismaComment.postId,
    });
  }
}
