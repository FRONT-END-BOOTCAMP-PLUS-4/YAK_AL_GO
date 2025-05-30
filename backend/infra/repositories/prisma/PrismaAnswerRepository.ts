import { Answer } from '@/backend/domain/entities/Answer';
import { User } from '@/backend/domain/entities/User';
import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaAnswerRepository implements AnswerRepository {
  constructor(private prisma: PrismaClient) {}

  async create(answer: Answer): Promise<Answer> {
    const created = await this.prisma.answers.create({
      data: {
        content: answer.content,
        contentHTML: answer.contentHTML,
        userId: answer.userId,
        qnaId: answer.qnaId,
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

  private mapToEntity(prismaAnswer: any): Answer {
    return new Answer({
      id: prismaAnswer.id,
      content: prismaAnswer.content,
      contentHTML: prismaAnswer.contentHTML,
      createdAt: prismaAnswer.createdAt,
      updatedAt: prismaAnswer.updatedAt,
      deletedAt: prismaAnswer.deletedAt,
      userId: prismaAnswer.userId,
      user: prismaAnswer.users
        ? new User({
            id: prismaAnswer.users.id,
            name: prismaAnswer.users.name,
            email: prismaAnswer.users.email,
            image: prismaAnswer.users.photo || '',
            member_type: prismaAnswer.users.member_type,
          })
        : undefined,
      qnaId: prismaAnswer.qnaId,
    });
  }
}
