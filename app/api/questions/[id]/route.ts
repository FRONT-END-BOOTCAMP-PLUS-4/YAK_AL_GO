import { NextRequest, NextResponse } from 'next/server';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { GetQuestionByIdUseCase } from '@/backend/application/usecases/question/GetQuestionByIdUseCase';
import { DeleteQuestionUseCase } from '@/backend/application/usecases/question/DeleteQuestionUseCase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

const questionRepository = new PrismaQuestionRepository(prisma);
const getQuestionByIdUseCase = new GetQuestionByIdUseCase(questionRepository);
const deleteQuestionUseCase = new DeleteQuestionUseCase(questionRepository);

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const questionId = parseInt(id);

    if (isNaN(questionId)) {
      return NextResponse.json({ message: 'Invalid question ID' }, { status: 400 });
    }

    const question = await getQuestionByIdUseCase.execute(questionId);

    if (!question) {
      return NextResponse.json({ message: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const questionId = parseInt(id);

    if (isNaN(questionId)) {
      return NextResponse.json({ message: 'Invalid question ID' }, { status: 400 });
    }

    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 질문 삭제
    await deleteQuestionUseCase.execute(questionId, session.user.id);

    return NextResponse.json({ message: '질문이 성공적으로 삭제되었습니다.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting question:', error);

    // 커스텀 에러 메시지 처리
    if (error.message.includes('질문을 찾을 수 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error.message.includes('권한이 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 403 });
    }
    if (error.message.includes('답변이 작성되었으므로')) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
