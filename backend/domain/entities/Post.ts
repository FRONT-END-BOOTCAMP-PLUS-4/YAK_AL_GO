import { Tag } from './Tag';
import { Comment } from './Comment';
import { User } from './User';

export class Post {
  id?: number;
  title: string;
  content: any; // JSON type
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  userId: string;
  user?: User;
  tags?: Tag[];
  comments?: Comment[];

  constructor(props: {
    id?: number;
    title: string;
    content: any;
    contentHTML: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    userId: string;
    user?: User;
    tags?: Tag[];
    comments?: Comment[];
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.contentHTML = props.contentHTML;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.userId = props.userId;
    this.user = props.user;
    this.tags = props.tags;
    this.comments = props.comments;
  }
}

export class PostResponse {
  id: number;
  title: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  tags: Tag[];
  commentCount: number;

  constructor(props: {
    id: number;
    title: string;
    content: any;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    tags: Tag[];
    commentCount: number;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.user = props.user;
    this.tags = props.tags;
    this.commentCount = props.commentCount;
  }
}
