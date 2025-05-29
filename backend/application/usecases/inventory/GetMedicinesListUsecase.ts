import { InventoryRepository } from '@/backend/domain/repositories/inventory/InventoryRepository';
import { Medicine } from '@/backend/domain/entities/inventory/Medicine';

export const getMedicinesList = async (
  repository: InventoryRepository
): Promise<Medicine[]> => {
  return await repository.getAllMedicines();
};
