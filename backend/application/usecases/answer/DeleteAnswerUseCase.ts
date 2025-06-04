import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { Answer } from '@/backend/domain/entities/Answer';

export class DeleteAnswerUseCase {
  constructor(
    private answerRepository: AnswerRepository,
    private questionRepository?: QuestionRepository,
    private algoliaSyncUseCase?: AlgoliaSyncUseCase
  ) {}

  async execute(answerId: number, userId: string): Promise<void> {
    // 답변 존재 여부 확인
    const existingAnswer = await this.answerRepository.findById(answerId);
    if (!existingAnswer) {
      throw new Error('답변을 찾을 수 없습니다.');
    }

    // 답변 작성자 확인
    if (existingAnswer.userId !== userId) {
      throw new Error('답변을 삭제할 권한이 없습니다.');
    }

    // 채택된 답변인지 확인 (채택된 답변은 삭제 불가)
    if (existingAnswer.isAccepted) {
      throw new Error('채택된 답변은 삭제할 수 없습니다.');
    }

    const questionId = existingAnswer.qnaId;

    // 답변 삭제 (소프트 삭제)
    await this.answerRepository.delete(answerId);

    // Update question in Algolia with the new list of answers
    if (this.algoliaSyncUseCase && this.questionRepository && questionId) {
      const question = await this.questionRepository.findById(questionId);
      if (question) {
        // Fetch all remaining answers for the question
        const remainingAnswers = await this.answerRepository.findByQuestionId(questionId);
        await this.algoliaSyncUseCase.updateQuestion(question, remainingAnswers);
      }
    }
  }
}
