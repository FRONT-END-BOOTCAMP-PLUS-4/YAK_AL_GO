interface UpdateCommentData {
  content: string;
}

export async function updateComment(commentId: number, data: UpdateCommentData) {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '댓글 수정에 실패했습니다.');
  }

  return response.json();
}
