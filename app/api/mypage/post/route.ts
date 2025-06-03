import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { PostRepository } from '@/backend/domain/repositories/mypage/PostRepository';
import { GetPostUseCase } from '@/backend/application/usecases/mypage/GetPostUseCase';
import { QnaPost, CommunityPost } from '@/backend/domain/entities/mypage/Post';

class PrismaPostRepository implements PostRepository {
  async findQnasByUserId(userId: string): Promise<QnaPost[]> {
    const qnas = await prisma.qnas.findMany({
      where: {
        userId: userId,
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        _count: {
          select: {
            answers: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return qnas.map(qna => new QnaPost(
      qna.id,
      qna.title,
      qna.createdAt,
      qna._count.answers
    ));
  }

  async findPostsByUserId(userId: string): Promise<CommunityPost[]> {
    const posts = await prisma.posts.findMany({
      where: {
        userId: userId,
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        _count: {
          select: {
            comments: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts.map(post => new CommunityPost(
      post.id,
      post.title,
      post.createdAt,
      post._count.comments
    ));
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const postRepository = new PrismaPostRepository();
    const getPostUseCase = new GetPostUseCase(postRepository);
    const result = await getPostUseCase.execute(userId);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post data' },
      { status: 500 }
    );
  }
}