import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AlgoliaSyncUseCase } from '@/backend/application/usecases/search/AlgoliaSyncUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';
import { PrismaPostRepository } from '@/backend/infra/repositories/prisma/PrismaPostRepository';
import { PrismaQuestionRepository } from '@/backend/infra/repositories/prisma/PrismaQuestionRepository';
import { PrismaAnswerRepository } from '@/backend/infra/repositories/prisma/PrismaAnswerRepository';
import { PrismaCommentRepository } from '@/backend/infra/repositories/prisma/PrismaCommentRepository';
import { Answer } from '@/backend/domain/entities/Answer';
import { User } from '@/backend/domain/entities/User';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // const session = await getServerSession(authOptions);

    // Only allow admin users to trigger bulk sync (you might want to adjust this)
    // if (!session?.user?.id) {
    //   return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    // }

    const body = await request.json();
    const { type } = body; // 'posts', 'questions', or 'all'

    // Initialize services
    const algoliaService = new AlgoliaService();
    const algoliaSyncUseCase = new AlgoliaSyncUseCase(algoliaService);

    const postRepository = new PrismaPostRepository(prisma);
    const questionRepository = new PrismaQuestionRepository(prisma);
    const answerRepository = new PrismaAnswerRepository(prisma);
    const commentRepository = new PrismaCommentRepository(prisma);

    let syncedCount = 0;

    switch (type) {
      case 'posts':
        // Get all posts with their comments
        let allPosts: any[] = [];
        let page = 1;
        let hasMorePosts = true;

        while (hasMorePosts) {
          const paginatedPosts = await postRepository.findAll({ page, limit: 100 });
          allPosts = allPosts.concat(paginatedPosts.posts);
          hasMorePosts = paginatedPosts.hasMore;
          page++;
        }

        // Get posts with their comments for sync
        const postsForSync = await Promise.all(
          allPosts.map(async (postResponse) => {
            const fullPost = await postRepository.findById(postResponse.id);
            const comments = await commentRepository.findByPostId(postResponse.id);
            if (fullPost) {
              return { post: fullPost, comments };
            }
            return null;
          })
        );

        const validPostsForSync = postsForSync.filter((p) => p !== null);
        await algoliaSyncUseCase.bulkSyncPosts(validPostsForSync);
        syncedCount = validPostsForSync.length;
        break;

      case 'questions':
        // Get all questions with their answers
        let allQuestions: any[] = [];
        let questionPage = 1;
        let hasMoreQuestions = true;

        while (hasMoreQuestions) {
          const paginatedQuestions = await questionRepository.findAll({ page: questionPage, limit: 100 });
          allQuestions = allQuestions.concat(paginatedQuestions.questions);
          hasMoreQuestions = paginatedQuestions.hasMore;
          questionPage++;
        }

        // Get questions with their answers for sync
        const questionsForSync = await Promise.all(
          allQuestions.map(async (questionResponse) => {
            const fullQuestion = await questionRepository.findById(questionResponse.id);
            // Get all answers for this question using the repository
            let answerEntities: Answer[] = [];
            let answerPage = 1;
            let hasMoreAnswers = true;

            // Get all answers through pagination
            while (hasMoreAnswers) {
              const paginatedAnswers = await answerRepository.findAll({ page: answerPage, limit: 100 });
              const questionAnswers = paginatedAnswers.answers.filter((answer) => answer.qnaId === questionResponse.id);
              answerEntities = answerEntities.concat(questionAnswers);
              hasMoreAnswers = paginatedAnswers.hasMore;
              answerPage++;
            }

            if (fullQuestion) {
              return { question: fullQuestion, answers: answerEntities };
            }
            return null;
          })
        );

        const validQuestionsForSync = questionsForSync.filter((q) => q !== null);
        await algoliaSyncUseCase.bulkSyncQuestions(validQuestionsForSync);
        syncedCount = validQuestionsForSync.length;
        break;

      case 'all':
        // Sync both posts and questions with their related data
        let totalSyncedCount = 0;

        // Sync posts with comments
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
            const comments = await commentRepository.findByPostId(postResponse.id);
            if (fullPost) {
              return { post: fullPost, comments };
            }
            return null;
          })
        );

        const validPostsForSyncAll = postsForSyncAll.filter((p) => p !== null);
        await algoliaSyncUseCase.bulkSyncPosts(validPostsForSyncAll);
        totalSyncedCount += validPostsForSyncAll.length;

        // Sync questions with answers
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
            // Get all answers for this question using the repository
            let answerEntities: Answer[] = [];
            let answerPageAll = 1;
            let hasMoreAnswersAll = true;

            // Get all answers through pagination
            while (hasMoreAnswersAll) {
              const paginatedAnswers = await answerRepository.findAll({ page: answerPageAll, limit: 100 });
              const questionAnswers = paginatedAnswers.answers.filter((answer) => answer.qnaId === questionResponse.id);
              answerEntities = answerEntities.concat(questionAnswers);
              hasMoreAnswersAll = paginatedAnswers.hasMore;
              answerPageAll++;
            }

            if (fullQuestion) {
              return { question: fullQuestion, answers: answerEntities };
            }
            return null;
          })
        );

        const validQuestionsForSyncAll = questionsForSyncAll.filter((q) => q !== null);
        await algoliaSyncUseCase.bulkSyncQuestions(validQuestionsForSyncAll);
        totalSyncedCount += validQuestionsForSyncAll.length;

        syncedCount = totalSyncedCount;
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
