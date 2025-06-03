import { Question } from '@/backend/domain/entities/Question';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { CreateQuestionDto, QuestionResponseDto } from '@/backend/application/usecases/question/dto/QuestionDto';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionRepository, private algoliaSyncUseCase?: AlgoliaSyncUseCase) {}

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

      // Get the full question with tags for Algolia sync
      const fullQuestion = await this.questionRepository.findById(created.id);
      if (fullQuestion && this.algoliaSyncUseCase) {
        await this.algoliaSyncUseCase.syncQuestion(fullQuestion, 0);
      }
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
