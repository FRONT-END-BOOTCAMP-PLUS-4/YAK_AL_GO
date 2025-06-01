export async function deleteComment(commentId: number) {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '댓글 삭제에 실패했습니다.');
  }

  return response.json();
}
