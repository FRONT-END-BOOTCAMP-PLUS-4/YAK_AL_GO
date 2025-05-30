import { NextRequest, NextResponse } from 'next/server';
import { PrismaPostRepository } from '@/backend/infra/repositories/prisma/PrismaPostRepository';
import { CreatePostDto } from '@/backend/application/usecases/post/dto/PostDto';
import { CreatePostUseCase } from '@/backend/application/usecases/post/CreatePostUsecase';
import { GetAllPostsUseCase } from '@/backend/application/usecases/post/GetAllPostsUsecase';
import prisma from '@/lib/prisma';
import { getToken } from 'next-auth/jwt';

const postRepository = new PrismaPostRepository(prisma);
const createPostUseCase = new CreatePostUseCase(postRepository);
const getAllPostsUseCase = new GetAllPostsUseCase(postRepository);

export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
    if (!token || !token.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const dto: CreatePostDto = {
      title: body.title,
      content: body.content,
      contentHTML: body.contentHTML,
      tags: body.tags,
      userId: token.id as string,
    };

    const result = await createPostUseCase.execute(dto);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const result = await getAllPostsUseCase.execute({ page, limit });
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
