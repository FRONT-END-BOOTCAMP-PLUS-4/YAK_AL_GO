export class Answer {
  id?: number;
  content: any;
  contentHTML: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  userId: string;
  qnaId: number;

  constructor(props: {
    id?: number;
    content: any;
    contentHTML: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    userId: string;
    qnaId: number;
  }) {
    this.id = props.id;
    this.content = props.content;
    this.contentHTML = props.contentHTML;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.userId = props.userId;
    this.qnaId = props.qnaId;
  }
}
