import { User } from './User';

export class Answer {
  id?: number;
  content: any;
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  isAccepted: boolean;
  userId: string;
  user?: User;
  qnaId: number;

  constructor(props: {
    id?: number;
    content: any;
    contentHTML: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    isAccepted?: boolean;
    userId: string;
    user?: User;
    qnaId: number;
  }) {
    this.id = props.id;
    this.content = props.content;
    this.contentHTML = props.contentHTML;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.isAccepted = props.isAccepted ?? false;
    this.userId = props.userId;
    this.user = props.user;
    this.qnaId = props.qnaId;
  }
}
