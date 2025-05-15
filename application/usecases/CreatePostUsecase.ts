import { PostRepository } from '../../app/domain/repositories/PostRepository';
import { TagRepository } from '../../app/domain/repositories/TagRepository';
import { CreatePostRequestDto } from './dto/CreatePostRequestDto';
import { Post } from '../../app/domain/entities/Post';

export class CreatePostUsecase {
  constructor(private postRepository: PostRepository, private tagRepository: TagRepository) {}

  async execute(request: CreatePostRequestDto): Promise<number> {
    const { title, content, authorId, tagIds } = request;

    // 태그 존재 여부 확인
    const areValidTagIds = await this.tagRepository.existsByIds(tagIds);
    // 태그가 존재하지 않으면 예외 발생
    if (!areValidTagIds) {
      throw new Error('Invalid tag ids');
    }

    // 게시글 생성
    const post = new Post(null, title, content, null, null, null, authorId, tagIds, null, null);
    // 게시글 저장
    const savedPost = await this.postRepository.save(post);
    // 게시글 아이디 반환
    return savedPost.id;
  }
}
