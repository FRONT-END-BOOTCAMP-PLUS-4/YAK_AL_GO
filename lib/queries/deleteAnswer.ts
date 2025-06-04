export async function deleteAnswer(answerId: number) {
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

  const response = await fetch(`${baseUrl}/api/answers/${answerId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '답변 삭제에 실패했습니다.');
  }

  return response.json();
}
