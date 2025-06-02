export interface PostResponseDTO {
  id: number;
  title: string;
  date: string;
  answers: number;
  type: 'expert' | 'community';
}

export interface PostsResponseDTO {
  qnas: PostResponseDTO[];
  posts: PostResponseDTO[];
}