import { NextRequest, NextResponse } from 'next/server';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { CreateQuestionDto } from '@/backend/application/usecases/question/dto/QuestionDto';
import { CreateQuestionUseCase } from '@/backend/application/usecases/question/CreateQuestionUseCase';
import { GetAllQuestionsUseCase } from '@/backend/application/usecases/question/GetAllQuestionsUseCase';

import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';

import prisma from '@/lib/prisma';

import { getToken } from 'next-auth/jwt';

const algoliaService = new AlgoliaService();
const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

const questionRepository = new PrismaQuestionRepository(prisma);
const createQuestionUseCase = new CreateQuestionUseCase(questionRepository, algoliaSyncUseCase);
const getAllQuestionsUseCase = new GetAllQuestionsUseCase(questionRepository);

export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
    if (!token || !token.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    const dto: CreateQuestionDto = {
      title: body.title,
      content: body.content,
      contentHTML: body.contentHTML,
      tags: body.tags,
      userId: token.id as string,
    };

    const result = await createQuestionUseCase.execute(dto);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating question:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const result = await getAllQuestionsUseCase.execute({ page, limit });
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
