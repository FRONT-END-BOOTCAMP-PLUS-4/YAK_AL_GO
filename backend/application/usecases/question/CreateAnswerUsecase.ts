import { Answer } from '@/backend/domain/entities/Answer';
import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { AnswerResponseDto } from '@/backend/application/usecases/question/dto/AnswerDto';
import { CreateAnswerDto } from '@/backend/application/usecases/question/dto/AnswerDto';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class CreateAnswerUsecase {
  constructor(
    private answerRepository: AnswerRepository,
    private questionRepository: QuestionRepository,
    private algoliaSyncUseCase?: AlgoliaSyncUseCase
  ) {}

  async execute(dto: CreateAnswerDto): Promise<AnswerResponseDto> {
    const answer = new Answer({
      content: dto.content,
      contentHTML: dto.contentHTML,
      userId: dto.userId,
      qnaId: dto.qnaId,
    });

    const created = await this.answerRepository.create(answer);

    // Sync answer to Algolia and update question answer count
    if (this.algoliaSyncUseCase && created.id) {
      const question = await this.questionRepository.findById(dto.qnaId);

      // Sync the new answer
      if (question) {
        await this.algoliaSyncUseCase.syncAnswer(created, question);

        // Update question with new answer count
        const answerCount = (question.answers?.length || 0) + 1;
        await this.algoliaSyncUseCase.updateQuestion(question, answerCount);
      } else {
        // Sync answer without question context
        await this.algoliaSyncUseCase.syncAnswer(created);
      }
    }

    return {
      id: created.id,
      content: created.content,
      contentHTML: created.contentHTML,
      userId: created.userId,
      questionId: created.qnaId,
    };
  }
}
