
export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public photo: string,
    public birthyear: number,
    public gender: number | null,
    public member_type: number,
    public created_at: Date,
    public deleted_at: Date | null,
    public hpid: string
  ) { }
}