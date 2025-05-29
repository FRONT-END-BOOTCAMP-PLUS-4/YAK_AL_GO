import { InventoryRepository } from '@/backend/domain/repositories/inventory/InventoryRepository';

export const updateInventoryStock = async (
  id: number,
  stock: number,
  repository: InventoryRepository
): Promise<void> => {
  await repository.updateInventoryStock(id, stock);
};
