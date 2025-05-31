export interface DeleteQuestionRequest {
  questionId: number;
}

export interface DeleteQuestionError {
  message: string;
  status?: number;
}

export const deleteQuestion = async (questionId: number): Promise<void> => {
  const response = await fetch(`/api/questions/${questionId}`, {
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
