import { UserMedis } from '../entities/UserMedisEntity';

export interface UserMedisRepository {
  saveMedications(medications: UserMedis[]): Promise<void>;
  findMedicationsByUserId(userId: string): Promise<UserMedis[]>;
}