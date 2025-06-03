import { QnaPost, CommunityPost } from '../../entities/mypage/Post';

export interface PostRepository {
  findQnasByUserId(userId: string): Promise<QnaPost[]>;
  findPostsByUserId(userId: string): Promise<CommunityPost[]>;
}