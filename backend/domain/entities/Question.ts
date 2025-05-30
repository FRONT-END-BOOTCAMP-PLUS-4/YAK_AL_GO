import { Tag } from './Tag';
import { Answer } from './Answer';
import { User } from './User';

export class Question {
  id?: number;
  title: string;
  content: any; // JSON type
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  tags?: Tag[];
  answers?: Answer[];
  userId?: string;
  user?: User;

  constructor(props: {
    id?: number;
    title: string;
    content: any;
    contentHTML: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    tags?: Tag[];
    answers?: Answer[];
    userId?: string;
    user?: User;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.contentHTML = props.contentHTML;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.tags = props.tags;
    this.answers = props.answers;
    this.userId = props.userId;
    this.user = props.user;
  }
}

export class QuestionResponse {
  id: number;
  title: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  tags: Tag[];
  answerCount: number;

  constructor(props: {
    id: number;
    title: string;
    content: any;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    tags: Tag[];
    answerCount: number;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.user = props.user;
    this.tags = props.tags;
    this.answerCount = props.answerCount;
  }
}
