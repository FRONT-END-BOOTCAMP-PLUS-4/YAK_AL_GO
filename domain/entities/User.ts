export class User {
  constructor(
    public id?: string,
    public email?: string,
    public name?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date | null
  ) {}
}
