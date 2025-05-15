import { Post } from '../entities/Post';

export interface PostRepository {
  findById(id: number): Promise<Post | null>;
  save(post: Post): Promise<Post>;
  update(post: Post): Promise<Post>;
  deleteById(id: number): Promise<void>;

  // cursor: 특정 날짜 이후의 데이터를 가져오는 것
  // limit: 한번에 가져오는 데이터의 개수
  findPostsAfter(cursor: number, limit: number): Promise<Post[]>;
}
