import { MedicineRepository } from '../../../domain/repositories/mypage/MedicineRepository';
import { MedicineDTO } from './dto/MedicineDTO';

export class GetMedicineUseCase {
  constructor(private readonly medicineRepository: MedicineRepository) {}

  async execute(userId: string): Promise<MedicineDTO[]> {
    const medicines = await this.medicineRepository.findByUserId(userId);
    
    return medicines.map(med => ({
      id: med.id,
      name: med.itemName,
      startDate: med.startDate ? med.startDate.toISOString().split('T')[0] : null,
      endDate: med.endDate ? med.endDate.toISOString().split('T')[0] : '계속',
      active: med.isActive(),
      item_seq: med.itemSeq
    }));
  }
}