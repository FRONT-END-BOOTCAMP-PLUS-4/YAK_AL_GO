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
      tags: question.tags || [],
      answers: question.answers || [],
    };
    return questionDto;
  }
}
