export interface DeletePostRequest {
  postId: number;
}

export interface DeletePostError {
  message: string;
  status?: number;
}

export const deletePost = async (postId: number): Promise<void> => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '게시물 삭제에 실패했습니다.');
  }
};
