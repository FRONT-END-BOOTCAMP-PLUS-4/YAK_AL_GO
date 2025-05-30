import { Question } from '@/backend/domain/entities/Question';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { CreateQuestionDto, QuestionResponseDto } from '@/backend/application/usecases/question/dto/QuestionDto';

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(dto: CreateQuestionDto): Promise<QuestionResponseDto> {
    const question = new Question({
      title: dto.title,
      content: dto.content,
      contentHTML: dto.contentHTML,
      userId: dto.userId,
    });

    const created = await this.questionRepository.create(question);
    if (created.id) {
      await this.questionRepository.addTags(created.id, dto.tags);
    }

    return {
      id: created.id,
      title: created.title,
      content: created.content,
      contentHTML: created.contentHTML,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
      userId: created.userId,
      answers: [],
    };
  }
}
