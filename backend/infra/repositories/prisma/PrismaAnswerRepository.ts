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

  async findById(id: number): Promise<Answer | null> {
    const prismaAnswer = await this.prisma.answers.findFirst({
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

    return prismaAnswer ? this.mapToEntity(prismaAnswer) : null;
  }

  async update(id: number, answer: Answer): Promise<Answer> {
    const updated = await this.prisma.answers.update({
      where: { id },
      data: {
        content: answer.content,
        contentHTML: answer.contentHTML,
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
    await this.prisma.answers.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  private mapToEntity(prismaAnswer: any): Answer {
    return new Answer({
      id: prismaAnswer.id,
      content: prismaAnswer.content,
      contentHTML: prismaAnswer.contentHTML,
      createdAt: prismaAnswer.createdAt,
      updatedAt: prismaAnswer.updatedAt,
      deletedAt: prismaAnswer.deletedAt,
      isAccepted: prismaAnswer.isAccepted,
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
