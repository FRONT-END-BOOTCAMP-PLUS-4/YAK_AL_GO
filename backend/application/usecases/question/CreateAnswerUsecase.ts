import { Answer } from '@/backend/domain/entities/AnswerEntity';
import { AnswerRepository } from '@/backend/domain/repositories/AnswerRepository';
import { AnswerResponseDto } from '@/backend/application/usecases/question/dto/AnswerDto';
import { CreateAnswerDto } from '@/backend/application/usecases/question/dto/AnswerDto';

export class CreateAnswerUsecase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute(dto: CreateAnswerDto): Promise<AnswerResponseDto> {
    const answer = new Answer({
      content: dto.content,
      content_html: dto.contentHTML,
      userId: dto.userId,
      qnaId: dto.qnaId,
    });

    const created = await this.answerRepository.create(answer);
    return {
      id: created.id,
      content: created.content,
      contentHTML: created.content_html,
      userId: created.userId,
      questionId: created.qnaId,
    };
  }
}
