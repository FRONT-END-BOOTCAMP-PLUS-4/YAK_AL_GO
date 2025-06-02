export class User {
  constructor(
    public readonly id: string,
    public readonly email: string | null,
    public readonly name: string | null,
    public readonly photo: string | null,
    public readonly birthyear: number | null,
    public readonly gender: string | null,
    public readonly memberType: number,
    public readonly createdAt: Date,
    public readonly deletedAt: Date | null,
    public readonly hpid: string | null,
  ) {}
}