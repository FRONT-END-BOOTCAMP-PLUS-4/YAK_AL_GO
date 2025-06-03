import { NextRequest, NextResponse } from 'next/server';
import { PrismaCommentRepository } from '@/backend/infra/repositories/prisma/PrismaCommentRepository';
import { DeleteCommentUseCase } from '@/backend/application/usecases/comment/DeleteCommentUseCase';
import { UpdateCommentUseCase, UpdateCommentDto } from '@/backend/application/usecases/comment/UpdateCommentUseCase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

const commentRepository = new PrismaCommentRepository(prisma);
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);
const updateCommentUseCase = new UpdateCommentUseCase(commentRepository);

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const commentId = parseInt(id);

    if (isNaN(commentId)) {
      return NextResponse.json({ message: 'Invalid comment ID' }, { status: 400 });
    }

    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 요청 본문 파싱
    const body = await request.json();
    const dto: UpdateCommentDto = {
      content: body.content,
    };

    // 댓글 수정
    const updatedComment = await updateCommentUseCase.execute(commentId, session.user.id, dto);

    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error: any) {
    console.error('Error updating comment:', error);

    // 커스텀 에러 메시지 처리
    if (error.message.includes('댓글을 찾을 수 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error.message.includes('권한이 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 403 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const commentId = parseInt(id);

    if (isNaN(commentId)) {
      return NextResponse.json({ message: 'Invalid comment ID' }, { status: 400 });
    }

    // 인증 확인
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 댓글 삭제
    await deleteCommentUseCase.execute(commentId, session.user.id);

    return NextResponse.json({ message: '댓글이 성공적으로 삭제되었습니다.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting comment:', error);

    // 커스텀 에러 메시지 처리
    if (error.message.includes('댓글을 찾을 수 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error.message.includes('권한이 없습니다')) {
      return NextResponse.json({ message: error.message }, { status: 403 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
