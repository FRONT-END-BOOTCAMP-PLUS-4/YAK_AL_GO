export interface CommentResponseDto {
  id?: number;
  content: string;
  userId: string;
  postId: number;
  createdAt?: Date;
  updatedAt?: Date;
  users?: {
    id: string;
    name: string;
    member_type: number;
  };
}

export interface CreateCommentDto {
  content: string;
  userId: string;
  postId: number;
}
