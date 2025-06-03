interface AcceptAnswerResponse {
  message: string;
}

export async function acceptAnswer(answerId: number): Promise<AcceptAnswerResponse> {
  const response = await fetch(`/api/answers/${answerId}/accept`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '답변 채택에 실패했습니다.');
  }

  return response.json();
}
