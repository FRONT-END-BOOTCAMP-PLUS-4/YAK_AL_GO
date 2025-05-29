import { Question, QuestionResponse } from '@/backend/domain/entities/QuestionEntity';
import { Tag } from '@/backend/domain/entities/TagEntity';
import {
  PaginationParams,
  PaginatedQuestions,
  QuestionRepository,
} from '@/backend/domain/repositories/QuestionRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaQuestionRepository implements QuestionRepository {
  constructor(private prisma: PrismaClient) {}

  async create(question: Question): Promise<Question> {
    const created = await this.prisma.qnas.create({
      data: {
        title: question.title,
        content: question.content,
        contentHTML: question.contentHTML,
        userId: question.userId,
      },
    });

    return new Question({
      id: created.id,
      title: created.title,
      content: created.content,
      contentHTML: created.contentHTML,
      createdAt: created.createdAt,
      userId: created.userId,
      answers: created.answers,
    });
  }

  async addTags(questionId: number, tags: Tag[]): Promise<void> {
    await this.prisma.qna_tags.createMany({
      data: tags.map((t) => ({
        qnaId: questionId,
        tagId: t.id,
      })),
    });
  }

  async findById(id: number): Promise<Question | null> {
    const question = await this.prisma.qnas.findUnique({
      where: { id },
      include: {
        qnaTags: {
          include: {
            tags: true,
          },
        },
        answers: {
          select: {
            id: true,
            content: true,
            contentHTML: true,
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

    if (!question) return null;

    return new Question({
      id: question.id,
      title: question.title,
      content: question.content,
      contentHTML: question.contentHTML,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      userId: question.userId,
      tags: question.qnaTags?.map((qt: any) => new Tag({ id: qt.tags.id, name: qt.tags.tagName })),
      answers: question.answers,
    });
  }

  async findAll(params: PaginationParams): Promise<PaginatedQuestions> {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const [questions, total] = await Promise.all([
      this.prisma.qnas.findMany({
        where: { deletedAt: null },
        orderBy: { createdAt: 'desc' },
        take: limit + 1, // fetch one extra to determine if there are more items
        skip,
        include: {
          qnaTags: {
            include: {
              tags: true,
            },
          },
          _count: {
            select: {
              answers: true,
            },
          },
        },
      }),
      this.prisma.qnas.count({
        where: { deletedAt: null },
      }),
    ]);

    const hasMore = questions.length > limit;
    const items = hasMore ? questions.slice(0, -1) : questions;

    return {
      questions: items.map(
        (q: any) =>
          new QuestionResponse({
            id: q.id,
            title: q.title,
            content: q.content,
            createdAt: q.createdAt,
            updatedAt: q.updatedAt,
            userId: q.userId,
            tags: q.qnaTags?.map((qt: any) => new Tag({ id: qt.tags.id, name: qt.tags.tagName })),
            answerCount: q._count.answers,
          })
      ),
      hasMore,
      total,
    };
  }
}
