export interface AnswerResponseDto {
  id?: number;
  content: any;
  contentHTML: string;
  userId: string;
  questionId: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: {
    id: string;
    name: string;
    memberType: string;
  };
}

export interface CreateAnswerDto {
  content: any;
  contentHTML: string;
  userId: string;
  qnaId: number;
}
