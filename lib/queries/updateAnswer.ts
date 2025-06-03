interface UpdateAnswerData {
  content: any;
  contentHTML: string;
}

export async function updateAnswer(answerId: number, data: UpdateAnswerData) {
  const response = await fetch(`/api/answers/${answerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '답변 수정에 실패했습니다.');
  }

  return response.json();
}
