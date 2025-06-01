import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { QuestionRepository } from '@/backend/domain/repositories/QuestionRepository';

export class AcceptAnswerUseCase {
  constructor(private answerRepository: AnswerRepository, private questionRepository: QuestionRepository) {}

  async execute(answerId: number, userId: string): Promise<void> {
    // 1. 답변이 존재하는지 확인
    const answer = await this.answerRepository.findById(answerId);
    if (!answer) {
      throw new Error('답변을 찾을 수 없습니다.');
    }

    // 2. 질문 정보 가져오기
    const question = await this.questionRepository.findById(answer.qnaId);
    if (!question) {
      throw new Error('질문을 찾을 수 없습니다.');
    }

    // 3. 질문 작성자인지 확인
    if (question.userId !== userId) {
      throw new Error('질문 작성자만 답변을 채택할 수 있습니다.');
    }

    // 4. 이미 채택된 답변이 있는지 확인
    const existingAcceptedAnswer = await this.answerRepository.findAcceptedByQuestionId(answer.qnaId);
    if (existingAcceptedAnswer) {
      throw new Error('이미 채택된 답변이 있습니다. 한 질문당 하나의 답변만 채택할 수 있습니다.');
    }

    // 5. 답변 채택
    await this.answerRepository.acceptAnswer(answerId);
  }
}
