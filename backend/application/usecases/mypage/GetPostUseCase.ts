import { PostRepository } from '../../../domain/repositories/mypage/PostRepository';
import { PostsResponseDTO } from './dto/PostDTO';

export class GetPostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(userId: string): Promise<PostsResponseDTO> {
    const [qnas, posts] = await Promise.all([
      this.postRepository.findQnasByUserId(userId),
      this.postRepository.findPostsByUserId(userId),
    ]);

    return {
      qnas: qnas.map(qna => ({
        id: qna.id,
        title: qna.title,
        date: qna.createdAt.toISOString().split('T')[0],
        answers: qna.answerCount,
        type: 'expert'
      })),
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        date: post.createdAt.toISOString().split('T')[0],
        answers: post.answerCount,
        type: 'community'
      }))
    };
  }
}