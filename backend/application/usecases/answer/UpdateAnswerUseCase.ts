import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { Answer } from '@/backend/domain/entities/Answer';

export interface UpdateAnswerDto {
  content: any;
  contentHTML: string;
}

export class UpdateAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

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
    const updatedAnswer = new Answer({
      id: answerId,
      content: dto.content,
      contentHTML: dto.contentHTML,
      userId: existingAnswer.userId,
      qnaId: existingAnswer.qnaId,
      isAccepted: existingAnswer.isAccepted,
      createdAt: existingAnswer.createdAt,
      updatedAt: new Date(),
    });

    return await this.answerRepository.update(answerId, updatedAnswer);
  }
}
