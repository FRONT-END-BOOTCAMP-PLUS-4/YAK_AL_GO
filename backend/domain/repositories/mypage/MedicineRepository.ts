import { Medicine } from '../../entities/mypage/Medicine';

export interface MedicineRepository {
  findByUserId(userId: string): Promise<Medicine[]>;
  delete(id: number): Promise<void>;
  create(userId: string, itemSeq: string, startDate: Date, endDate: Date | null): Promise<Medicine>;
}