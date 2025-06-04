export interface DeleteQuestionRequest {
  questionId: number;
}

export interface DeleteQuestionError {
  message: string;
  status?: number;
}

export const deleteQuestion = async (questionId: number): Promise<void> => {
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

  const url = `${baseUrl}/api/questions/${questionId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '질문 삭제에 실패했습니다.');
  }
};
