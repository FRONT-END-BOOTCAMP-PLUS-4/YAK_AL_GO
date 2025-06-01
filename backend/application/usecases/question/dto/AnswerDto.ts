export interface AnswerResponseDto {
  id?: number;
  content: any;
  contentHTML: string;
  isAccepted?: boolean;
  userId: string;
  questionId: number;
  createdAt?: Date;
  updatedAt?: Date;
  users?: {
    id: string;
    name: string;
    member_type: number;
  };
}

export interface CreateAnswerDto {
  content: any;
  contentHTML: string;
  userId: string;
  qnaId: number;
}
