import { CreateAnswerDto } from '@/backend/application/usecases/question/dto/AnswerDto';

// question에 대해서 답변을 작성할 경우에 해당 함수를 호출한다.
// 필요한 fields는 다음과 같다.
// - content: string
// - content_html: string
// - userId: string
// - qnaId: number

// userId를 조회할 수 없을때 401 에러가 발생한다.
// qnaId를 조회할 수 없을때 404 에러가 발생한다.
// user의 type이 0이 아닐때 403 에러가 발생한다.
// content가 없을경우 400 에러가 발생한다.
// content_html가 없을경우 400 에러가 발생한다.
// 그 외 에러는 500 에러가 발생한다.

export async function postAnswer(dto: CreateAnswerDto) {
  try {
    const response = await fetch('/api/answers', {
      method: 'POST',
      body: JSON.stringify(dto),
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('question not found');
      }
      if (response.status === 500) {
        throw new Error('internal server error');
      }
      if (response.status === 400) {
        throw new Error('bad request');
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
      throw new Error('Failed to post answer');
    }
    return response.json();
  } catch (error) {
    console.error('Error posting answer:', error);
    throw error;
  }
}
