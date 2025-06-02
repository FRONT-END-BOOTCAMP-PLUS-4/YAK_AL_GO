import { MedicinesRepository } from '../../../domain/repositories/mypage/MedicinesRepository';
import { MedicinesDTO } from './dto/MedicinesDTO';

export class GetMedicinesUseCase {
  constructor(private readonly medicinesRepository: MedicinesRepository) {}

  async execute(query: string): Promise<MedicinesDTO[]> {
    if (!query || query.length < 2) {
      return [];
    }

    const medicines = await this.medicinesRepository.searchMedicines(query);
    return medicines.map(medicine => ({
      item_seq: medicine.itemSeq,
      item_name: medicine.itemName,
      entp_name: medicine.entpName
    }));
  }
}