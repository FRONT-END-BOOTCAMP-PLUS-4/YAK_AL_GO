import { NextRequest, NextResponse } from 'next/server';
import { PrismaCommentRepository } from '@/backend/infra/repositories/prisma/PrismaCommentRepository';
import { PrismaPostRepository } from '@/backend/infra/repositories/prisma/PrismaPostRepository';
import { CreateCommentDto } from '@/backend/application/usecases/post/dto/CommentDto';
import { CreateCommentUsecase } from '@/backend/application/usecases/post/CreateCommentUsecase';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import prisma from '@/lib/prisma';

const algoliaService = new AlgoliaService();
const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

const commentRepository = new PrismaCommentRepository(prisma);
const postRepository = new PrismaPostRepository(prisma);
const createCommentUseCase = new CreateCommentUsecase(commentRepository, postRepository, algoliaSyncUseCase);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const dto: CreateCommentDto = {
      content: body.content,
      userId: body.userId,
      postId: body.postId,
    };

    const result = await createCommentUseCase.execute(dto);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
