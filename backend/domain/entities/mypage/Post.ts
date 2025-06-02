export interface BasePost {
  id: number;
  title: string;
  createdAt: Date;
  answerCount: number;
}

export class QnaPost implements BasePost {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly createdAt: Date,
    public readonly answerCount: number,
  ) {}
}

export class CommunityPost implements BasePost {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly createdAt: Date,
    public readonly answerCount: number,
  ) {}
}