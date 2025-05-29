export class Comment {
  id?: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  userId: string;
  postId: number;

  constructor(props: {
    id?: number;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    userId: string;
    postId: number;
  }) {
    this.id = props.id;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.userId = props.userId;
    this.postId = props.postId;
  }
}
