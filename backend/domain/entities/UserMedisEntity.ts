export class UserMedis {
  constructor(
    public id: number | null = null,
    public userId: string,
    public itemSeq: string,
    public start_date: Date | null,
    public end_date: Date | null
  ) {}
}