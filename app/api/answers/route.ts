import { NextRequest, NextResponse } from 'next/server';
import { CreateAnswerDto } from '@/backend/application/usecases/question/dto/AnswerDto';
import { CreateAnswerUsecase } from '@/backend/application/usecases/question/CreateAnswerUsecase';
import { PrismaAnswerRepository } from '@/backend/infra/repositories/prisma/PrismaAnswerRepository';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import prisma from '@/lib/prisma';

// 답변을 작성할 경우에 해당 함수를 호출한다.
export async function POST(request: NextRequest) {
  try {
    // 답변 생성에 필요한 레포지토리 및 유스케이스 생성
    const algoliaService = new AlgoliaService();
    const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

    const answerRepository = new PrismaAnswerRepository(prisma);
    const questionRepository = new PrismaQuestionRepository(prisma);
    const createAnswerUsecase = new CreateAnswerUsecase(answerRepository, questionRepository, algoliaSyncUseCase);
    const body = await request.json();

    const dto: CreateAnswerDto = {
      content: body.content,
      contentHTML: body.contentHTML,
      userId: body.userId,
      qnaId: body.qnaId,
    };
    // error code
    {
      // 400: 필수 필드가 없을 경우
      if (!dto.content || !dto.contentHTML || !dto.userId || !dto.qnaId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      // 404: QnA가 없을 경우
      const qna = await prisma.qnas.findUnique({
        where: { id: body.qnaId },
      });

      if (!qna) {
        return NextResponse.json({ error: 'QnA not found' }, { status: 404 });
      }

      // 401: 유저가 없을 경우
      const user = await prisma.users.findUnique({
        where: { id: body.userId },
      });

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 401 });
      }
      // 403: 유저의 타입이 0일 경우
      if (user.member_type === 0) {
        return NextResponse.json({ error: 'User does not have permission to create answers' }, { status: 403 });
      }
    }
    // 생성, 생성 완료시 답변 반환
    const answer = await createAnswerUsecase.execute(dto);
    return NextResponse.json(answer);
  } catch (error) {
    console.error('Error creating answer:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
