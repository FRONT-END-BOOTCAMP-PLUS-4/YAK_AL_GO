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

  async findAcceptedByQuestionId(questionId: number): Promise<Answer | null> {
    const prismaAnswer = await this.prisma.answers.findFirst({
      where: {
        qnaId: questionId,
        isAccepted: true,
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

  async findByQuestionId(questionId: number): Promise<Answer[]> {
    const answers = await this.prisma.answers.findMany({
      where: {
        qnaId: questionId,
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
      orderBy: { createdAt: 'asc' },
    });

    return answers.map(this.mapToEntity);
  }

  async findAll(options: { page: number; limit: number }): Promise<{ answers: Answer[]; hasMore: boolean }> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [answers, total] = await Promise.all([
      this.prisma.answers.findMany({
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
      this.prisma.answers.count({
        where: {
          deletedAt: null,
        },
      }),
    ]);

    const hasMore = skip + limit < total;

    return {
      answers: answers.map(this.mapToEntity),
      hasMore,
    };
  }

  async acceptAnswer(id: number): Promise<Answer> {
    const updated = await this.prisma.answers.update({
      where: { id },
      data: {
        isAccepted: true,
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
