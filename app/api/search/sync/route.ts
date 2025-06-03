import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import { PrismaPostRepository } from '@/backend/infra/repositories/prisma/PrismaPostRepository';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Only allow admin users to trigger bulk sync (you might want to adjust this)
    if (!session?.user?.id) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const body = await request.json();
    const { type } = body; // 'posts', 'questions', or 'all'

    // Initialize services
    const algoliaService = new AlgoliaService();
    const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

    const postRepository = new PrismaPostRepository(prisma);
    const questionRepository = new PrismaQuestionRepository(prisma);

    let syncedCount = 0;

    switch (type) {
      case 'posts':
        // Get all posts by paginating through all pages
        let allPosts: any[] = [];
        let page = 1;
        let hasMorePosts = true;

        while (hasMorePosts) {
          const paginatedPosts = await postRepository.findAll({ page, limit: 100 });
          allPosts = allPosts.concat(paginatedPosts.posts);
          hasMorePosts = paginatedPosts.hasMore;
          page++;
        }

        // Convert PostResponse to Post-like objects for sync
        const postsForSync = await Promise.all(
          allPosts.map(async (postResponse) => {
            // Get full post entity with all relations
            const fullPost = await postRepository.findById(postResponse.id);
            if (fullPost) {
              return { post: fullPost, commentCount: postResponse.commentCount };
            }
            return null;
          })
        );

        const validPostsForSync = postsForSync.filter((p) => p !== null);
        await algoliaSyncUseCase.bulkSyncPosts(validPostsForSync);
        syncedCount = validPostsForSync.length;
        break;

      case 'questions':
        // Get all questions by paginating through all pages
        let allQuestions: any[] = [];
        let questionPage = 1;
        let hasMoreQuestions = true;

        while (hasMoreQuestions) {
          const paginatedQuestions = await questionRepository.findAll({ page: questionPage, limit: 100 });
          allQuestions = allQuestions.concat(paginatedQuestions.questions);
          hasMoreQuestions = paginatedQuestions.hasMore;
          questionPage++;
        }

        // Convert QuestionResponse to Question-like objects for sync
        const questionsForSync = await Promise.all(
          allQuestions.map(async (questionResponse) => {
            // Get full question entity with all relations
            const fullQuestion = await questionRepository.findById(questionResponse.id);
            if (fullQuestion) {
              return { question: fullQuestion, answerCount: questionResponse.answerCount };
            }
            return null;
          })
        );

        const validQuestionsForSync = questionsForSync.filter((q) => q !== null);
        await algoliaSyncUseCase.bulkSyncQuestions(validQuestionsForSync);
        syncedCount = validQuestionsForSync.length;
        break;

      case 'all':
        // Sync both posts and questions
        let allPostsAll: any[] = [];
        let pageAll = 1;
        let hasMorePostsAll = true;

        while (hasMorePostsAll) {
          const paginatedPosts = await postRepository.findAll({ page: pageAll, limit: 100 });
          allPostsAll = allPostsAll.concat(paginatedPosts.posts);
          hasMorePostsAll = paginatedPosts.hasMore;
          pageAll++;
        }

        const postsForSyncAll = await Promise.all(
          allPostsAll.map(async (postResponse) => {
            const fullPost = await postRepository.findById(postResponse.id);
            if (fullPost) {
              return { post: fullPost, commentCount: postResponse.commentCount };
            }
            return null;
          })
        );

        const validPostsForSyncAll = postsForSyncAll.filter((p) => p !== null);
        await algoliaSyncUseCase.bulkSyncPosts(validPostsForSyncAll);

        let allQuestionsAll: any[] = [];
        let questionPageAll = 1;
        let hasMoreQuestionsAll = true;

        while (hasMoreQuestionsAll) {
          const paginatedQuestions = await questionRepository.findAll({ page: questionPageAll, limit: 100 });
          allQuestionsAll = allQuestionsAll.concat(paginatedQuestions.questions);
          hasMoreQuestionsAll = paginatedQuestions.hasMore;
          questionPageAll++;
        }

        const questionsForSyncAll = await Promise.all(
          allQuestionsAll.map(async (questionResponse) => {
            const fullQuestion = await questionRepository.findById(questionResponse.id);
            if (fullQuestion) {
              return { question: fullQuestion, answerCount: questionResponse.answerCount };
            }
            return null;
          })
        );

        const validQuestionsForSyncAll = questionsForSyncAll.filter((q) => q !== null);
        await algoliaSyncUseCase.bulkSyncQuestions(validQuestionsForSyncAll);

        syncedCount = validPostsForSyncAll.length + validQuestionsForSyncAll.length;
        break;

      default:
        return NextResponse.json(
          { error: '유효하지 않은 동기화 타입입니다. (posts, questions, all)' },
          { status: 400 }
        );
    }

    // Configure index settings
    await algoliaService.configureIndex();

    return NextResponse.json(
      {
        message: `${type} 데이터 동기화가 완료되었습니다.`,
        syncedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sync error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: '동기화 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
