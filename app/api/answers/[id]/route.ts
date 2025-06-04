import { NextRequest, NextResponse } from 'next/server';
import { PrismaAnswerRepository } from '@/backend/infra/repositories/prisma/PrismaAnswerRepository';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { DeleteAnswerUseCase } from '@/backend/application/usecases/answer/DeleteAnswerUseCase';
import { UpdateAnswerUseCase, UpdateAnswerDto } from '@/backend/application/usecases/answer/UpdateAnswerUseCase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import prisma from '@/lib/prisma';

const algoliaService = new AlgoliaService();
const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

const answerRepository = new PrismaAnswerRepository(prisma);
const questionRepository = new PrismaQuestionRepository(prisma);
const deleteAnswerUseCase = new DeleteAnswerUseCase(answerRepository, questionRepository, algoliaSyncUseCase);
const updateAnswerUseCase = new UpdateAnswerUseCase(answerRepository, questionRepository, algoliaSyncUseCase);

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const answerId = parseInt(id);

    if (isNaN(answerId)) {
      return NextResponse.json({ message: 'Invalid answer ID' }, { status: 400 });
    }

    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 요청 본문 파싱
    const body = await request.json();
    const dto: UpdateAnswerDto = {
      content: body.content,
      contentHTML: body.contentHTML,
    };

    // 답변 수정
    const updatedAnswer = await updateAnswerUseCase.execute(answerId, session.user.id, dto);

    return NextResponse.json(updatedAnswer, { status: 200 });
  } catch (error: any) {
    console.error('Error updating answer:', error);

    // 커스텀 에러 메시지 처리
    if (error.message.includes('답변을 찾을 수 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error.message.includes('권한이 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 403 });
    }
    if (error.message.includes('채택된 답변은')) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const answerId = parseInt(id);

    if (isNaN(answerId)) {
      return NextResponse.json({ message: 'Invalid answer ID' }, { status: 400 });
    }

    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 답변 삭제
    await deleteAnswerUseCase.execute(answerId, session.user.id);

    return NextResponse.json({ message: '답변이 성공적으로 삭제되었습니다.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting answer:', error);

    // 커스텀 에러 메시지 처리
    if (error.message.includes('답변을 찾을 수 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error.message.includes('권한이 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 403 });
    }
    if (error.message.includes('채택된 답변은')) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
