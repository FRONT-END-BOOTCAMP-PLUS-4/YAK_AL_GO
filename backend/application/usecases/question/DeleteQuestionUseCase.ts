import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';

export class DeleteQuestionUseCase {
  constructor(private questionRepository: QuestionRepository, private algoliaSyncUseCase: AlgoliaSyncUseCase) {}

  async execute(questionId: number, userId: string): Promise<void> {
    // 질문 존재 여부 확인
    const question = await this.questionRepository.findById(questionId);
    if (!question) {
      throw new Error('질문을 찾을 수 없습니다.');
    }

    // 질문 작성자 확인
    if (question.userId !== userId) {
      throw new Error('질문을 삭제할 권한이 없습니다.');
    }

    // 답변 존재 여부 확인
    const hasAnswers = await this.questionRepository.hasAnswers(questionId);
    if (hasAnswers) {
      throw new Error('이미 답변이 작성되었으므로 삭제가 불가능합니다.');
    }

    // 질문 삭제 (userId도 함께 전달)
    await this.questionRepository.delete(questionId, userId);

    if (this.algoliaSyncUseCase) {
      await this.algoliaSyncUseCase.deleteQuestion(questionId);
    }
  }
}
