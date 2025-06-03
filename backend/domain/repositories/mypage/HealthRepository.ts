import { Health } from '../../entities/mypage/Health';

export interface HealthRepository {
  findByUserId(userId: string): Promise<Health[]>;
}