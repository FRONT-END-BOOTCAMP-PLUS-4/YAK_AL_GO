import { TagResponseDto } from '@/backend/application/usecases/tag/dto/TagDto';
import { CommentResponseDto } from '@/backend/application/usecases/post/dto/CommentDto';

export interface CreatePostDto {
  title: string;
  content: any;
  contentHTML: string;
  userId: string;
  tags: TagResponseDto[];
}

export interface PostResponseDto {
  id?: number;
  title: string;
  content: any;
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  user?: {
    id: string;
    name: string;
    email?: string;
    image: string;
    member_type?: number;
  };
  tags?: TagResponseDto[];
  comments: CommentResponseDto[];
}
