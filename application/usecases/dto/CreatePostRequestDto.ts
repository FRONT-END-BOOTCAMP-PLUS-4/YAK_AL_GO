export class CreatePostRequestDto {
  constructor(public title: string, public content: string, public authorId: string, public tagIds: string[]) {}
}
