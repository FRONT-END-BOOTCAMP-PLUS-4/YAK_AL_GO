import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { Answer } from '@/backend/domain/entities/Answer';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export interface UpdateAnswerDto {
  content: any;
  contentHTML: string;
}

export class UpdateAnswerUseCase {
  constructor(
    private answerRepository: AnswerRepository,
    private questionRepository?: QuestionRepository,
    private algoliaSyncUseCase?: AlgoliaSyncUseCase
  ) {}

  async execute(answerId: number, userId: string, dto: UpdateAnswerDto): Promise<Answer> {
    // 답변 존재 여부 확인
    const existingAnswer = await this.answerRepository.findById(answerId);
    if (!existingAnswer) {
      throw new Error('답변을 찾을 수 없습니다.');
    }

    // 답변 작성자 확인
    if (existingAnswer.userId !== userId) {
      throw new Error('답변을 수정할 권한이 없습니다.');
    }

    // 채택된 답변인지 확인 (채택된 답변은 수정 불가)
    if (existingAnswer.isAccepted) {
      throw new Error('채택된 답변은 수정할 수 없습니다.');
    }

    // 답변 수정
    const updatedAnswerEntity = new Answer({
      id: answerId,
      content: dto.content,
      contentHTML: dto.contentHTML,
      userId: existingAnswer.userId,
      qnaId: existingAnswer.qnaId,
      isAccepted: existingAnswer.isAccepted,
      createdAt: existingAnswer.createdAt,
      updatedAt: new Date(),
    });

    const result = await this.answerRepository.update(answerId, updatedAnswerEntity);

    // Update question in Algolia with the new list of answers (including the updated one)
    if (this.algoliaSyncUseCase && this.questionRepository && existingAnswer.qnaId) {
      const question = await this.questionRepository.findById(existingAnswer.qnaId);
      if (question) {
        // Fetch all answers for the question, which will include the updated one
        const allAnswers = await this.answerRepository.findByQuestionId(existingAnswer.qnaId);
        await this.algoliaSyncUseCase.updateQuestion(question, allAnswers);
      }
    }

    return result;
  }
}
