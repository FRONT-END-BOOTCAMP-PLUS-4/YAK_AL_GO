import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SearchUseCase } from '@/backend/application/usecases/search/SearchUseCase';
import { AlgoliaService } from '@/backend/infra/services/AlgoliaService';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') as 'post' | 'question' | null;
    const userId = searchParams.get('userId');
    const tags =
      searchParams
        .get('tags')
        ?.split(',')
        .filter((tag) => tag.trim()) || [];
    const isAccepted =
      searchParams.get('isAccepted') === 'true' ? true : searchParams.get('isAccepted') === 'false' ? false : undefined;
    const page = parseInt(searchParams.get('page') || '0');
    const hitsPerPage = parseInt(searchParams.get('hitsPerPage') || '20');

    if (!query.trim()) {
      return NextResponse.json({ error: '검색어를 입력해주세요.' }, { status: 400 });
    }

    // Initialize services
    const algoliaService = new AlgoliaService();
    const searchUseCase = new SearchUseCase(algoliaService);

    // Build filters
    const filters: any = {};
    if (type) filters.type = type;
    if (userId) filters.userId = userId;
    if (tags.length > 0) filters.tags = tags;
    if (isAccepted !== undefined) filters.isAccepted = isAccepted;

    // Execute search
    const result = await searchUseCase.search(query, filters, page, hitsPerPage);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Search error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: '검색 중 오류가 발생했습니다.' }, { status: 500 });
  }
}

// Endpoint for searching posts specifically
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const body = await request.json();
    const { query, type, userId, tags, isAccepted, page = 0, hitsPerPage = 20 } = body;

    if (!query?.trim()) {
      return NextResponse.json({ error: '검색어를 입력해주세요.' }, { status: 400 });
    }

    // Initialize services
    const algoliaService = new AlgoliaService();
    const searchUseCase = new SearchUseCase(algoliaService);

    // Build filters
    const filters: any = {};
    if (type && (type === 'post' || type === 'question')) filters.type = type;
    if (userId) filters.userId = userId;
    if (tags && tags.length > 0) filters.tags = tags;
    if (isAccepted !== undefined) filters.isAccepted = isAccepted;

    // Execute search
    const result = await searchUseCase.search(query, filters, page, hitsPerPage);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Search error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: '검색 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
