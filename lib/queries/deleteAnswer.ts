export async function deleteAnswer(answerId: number) {
  const response = await fetch(`/api/answers/${answerId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '답변 삭제에 실패했습니다.');
  }

  return response.json();
}
