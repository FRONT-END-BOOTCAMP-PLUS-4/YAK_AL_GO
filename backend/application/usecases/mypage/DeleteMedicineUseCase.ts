import { MedicineRepository } from '../../../domain/repositories/mypage/MedicineRepository';

export class DeleteMedicineUseCase {
  constructor(private readonly medicineRepository: MedicineRepository) {}

  async execute(medicineId: number): Promise<void> {
    await this.medicineRepository.delete(medicineId);
  }
}