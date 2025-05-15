import { CreatePostUsecase } from 'application/usecases/CreatePostUsecase';
import { PrismaPostRepository } from 'infra/repositories/prisma/PrismaPostRepository';
import { PrismaTagRepository } from 'infra/repositories/prisma/PrismaTagRepository';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, authorId, tagIds } = body;

  const postRepository = new PrismaPostRepository();
  const tagRepository = new PrismaTagRepository();
  const createPostUsecase = new CreatePostUsecase(postRepository, tagRepository);
  const postId = await createPostUsecase.execute({ title, content, authorId, tagIds });

  return NextResponse.json({ postId });
}
