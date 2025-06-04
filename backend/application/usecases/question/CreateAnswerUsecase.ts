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

    // Update question with new answer in Algolia
    if (this.algoliaSyncUseCase && created.id) {
      const question = await this.questionRepository.findById(dto.qnaId);

      if (question) {
        // 해당 질문의 모든 답변을 다시 가져와서 Algolia에 동기화
        const answers = await this.answerRepository.findByQuestionId(dto.qnaId);
        await this.algoliaSyncUseCase.updateQuestion(question, answers);
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
