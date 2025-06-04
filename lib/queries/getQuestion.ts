import { QuestionResponseDto } from '@/backend/application/usecases/question/dto/QuestionDto';

// TODO: 에러 처리 필요
// Question Detail 페이지에서 question id를 활용해서 question을 조회한다.
// answers, question, user 등을 포함하여 조회한다.
export async function getQuestion(id: string): Promise<QuestionResponseDto> {
  try {
    // For server-side rendering, construct the proper URL
    let baseUrl = '';

    if (typeof window === 'undefined') {
      // Server-side: use environment variables or default to localhost
      baseUrl =
        process.env.NEXTAUTH_URL ||
        process.env.NEXT_PUBLIC_APP_URL ||
        process.env.NEXT_PUBLIC_BASE_URL ||
        'http://localhost:3000';
    } else {
      // Client-side: use relative URL
      baseUrl = '';
    }

    const url = `${baseUrl}/api/questions/${id}`;

    const response = await fetch(url, {
      cache: 'no-store', // Disable caching, or use revalidate
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Question not found');
      }
      if (response.status === 500) {
        throw new Error('Internal server error');
      }
      if (response.status === 400) {
        throw new Error('Bad request');
      }
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status === 403) {
        throw new Error('Forbidden');
      }
      if (response.status === 405) {
        throw new Error('Method not allowed');
      }
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
}
