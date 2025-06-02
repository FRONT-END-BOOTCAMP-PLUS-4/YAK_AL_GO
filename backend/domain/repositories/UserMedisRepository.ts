import { UserMedication } from '../entities/UserMedicationEntity';

export interface UserMedicationRepository {
  saveMedications(medications: UserMedication[]): Promise<void>;
  findMedicationsByUserId(userId: string): Promise<UserMedication[]>;
}