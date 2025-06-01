import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

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

    // 답변 삭제 (소프트 삭제)
    await this.answerRepository.delete(answerId);
  }
}
