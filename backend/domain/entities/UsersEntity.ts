export class User {
  constructor(
    public id: string,
    public name: string | null,
    public email: string | null,
    public photo: string | null,
    public birthyear: number | null,
    public gender: string | null,
    public member_type: number,
    public created_at: Date,
    public deleted_at: Date | null,
    public hpid: string | null
  ) { }
}