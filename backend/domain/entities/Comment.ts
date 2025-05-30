import { User } from './User';

export class Comment {
  id?: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  userId: string;
  user?: User;
  postId: number;

  constructor(props: {
    id?: number;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    userId: string;
    user?: User;
    postId: number;
  }) {
    this.id = props.id;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.userId = props.userId;
    this.user = props.user;
    this.postId = props.postId;
  }
}
