export interface UserRepository {
  withdraw(userId: string): Promise<void>;
}