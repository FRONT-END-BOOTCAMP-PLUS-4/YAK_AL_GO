import { Tag } from './TagEntity';
import { Answer } from './AnswerEntity';

export class Question {
  id?: number;
  title: string;
  content: any; // JSON type
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  userId: string;
  tags?: Tag[];
  answers?: Answer[];

  constructor(props: {
    id?: number;
    title: string;
    content: any;
    contentHTML: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    userId: string;
    tags?: Tag[];
    answers?: Answer[];
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.contentHTML = props.contentHTML;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.userId = props.userId;
    this.tags = props.tags;
    this.answers = props.answers;
  }
}

export class QuestionResponse {
  id: number;
  title: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  tags: Tag[];
  answerCount: number;

  constructor(props: {
    id: number;
    title: string;
    content: any;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    tags: Tag[];
    answerCount: number;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.userId = props.userId;
    this.tags = props.tags;
    this.answerCount = props.answerCount;
  }
}
