import { MedicineRepository } from '../../../domain/repositories/mypage/MedicineRepository';
import { Medicine } from '../../../domain/entities/mypage/Medicine';
import { CreateMedicineDTO } from './dto/MedicineDTO';

export class PostMedicineUseCase {
  constructor(private readonly medicineRepository: MedicineRepository) {}

  async execute(data: CreateMedicineDTO): Promise<Medicine> {
    return await this.medicineRepository.create(
      data.userId,
      data.itemSeq,
      new Date(data.startDate),
      data.endDate ? new Date(data.endDate) : null
    );
  }
}