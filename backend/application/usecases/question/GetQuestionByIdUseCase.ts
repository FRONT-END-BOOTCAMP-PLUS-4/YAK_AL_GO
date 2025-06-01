import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { QuestionResponseDto } from '@/backend/application/usecases/question/dto/QuestionDto';

export class GetQuestionByIdUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(id: number): Promise<QuestionResponseDto | null> {
    // findById already includes tags and answer count through Prisma's include
    const question = await this.questionRepository.findById(id);

    if (!question) {
      return null;
    }
    const questionDto: QuestionResponseDto = {
      id: question.id,
      title: question.title,
      content: question.content,
      contentHTML: question.contentHTML,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      userId: question.userId,
      user: question.user
        ? {
            id: question.user.id,
            name: question.user.name,
            email: question.user.email,
            image: question.user.image,
            member_type: question.user.member_type,
          }
        : undefined,
      tags: question.tags || [],
      answers:
        question.answers?.map((answer) => ({
          id: answer.id,
          content: answer.content,
          contentHTML: answer.contentHTML,
          isAccepted: answer.isAccepted,
          userId: answer.userId,
          questionId: id,
          createdAt: answer.createdAt,
          updatedAt: answer.updatedAt,
          users: answer.user
            ? {
                id: answer.user.id,
                name: answer.user.name,
                image: answer.user.image,
                member_type: answer.user.member_type || 0,
              }
            : undefined,
        })) || [],
    };
    return questionDto;
  }
}
