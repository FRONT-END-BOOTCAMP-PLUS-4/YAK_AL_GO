import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AcceptAnswerUseCase } from '@/backend/application/usecases/answer/AcceptAnswerUseCase';
import { PrismaAnswerRepository } from '@/backend/infra/repositories/prisma/PrismaAnswerRepository';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // 세션 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const answerId = parseInt(params.id);
    if (isNaN(answerId)) {
      return NextResponse.json({ error: '유효하지 않은 답변 ID입니다.' }, { status: 400 });
    }

    // UseCase 실행
    const answerRepository = new PrismaAnswerRepository(prisma);
    const questionRepository = new PrismaQuestionRepository(prisma);
    const acceptAnswerUseCase = new AcceptAnswerUseCase(answerRepository, questionRepository);

    await acceptAnswerUseCase.execute(answerId, session.user.id);

    return NextResponse.json({ message: '답변이 채택되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('답변 채택 중 오류 발생:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
