import { NextRequest, NextResponse } from 'next/server';
import { PrismaPostRepository } from '@/backend/infra/repositories/prisma/PrismaPostRepository';
import { GetPostByIdUseCase } from '@/backend/application/usecases/post/GetPostByIdUsecase';
import prisma from '@/lib/prisma';

const postRepository = new PrismaPostRepository(prisma);
const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
      return NextResponse.json({ message: 'Invalid post ID' }, { status: 400 });
    }

    const post = await getPostByIdUseCase.execute(postId);

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
