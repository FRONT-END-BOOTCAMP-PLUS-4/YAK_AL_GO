import { InventoryRepository } from '@/backend/domain/repositories/inventory/InventoryRepository';

export const deleteInventoryItem = async (
  id: number,
  repository: InventoryRepository
): Promise<void> => {
  await repository.deleteInventoryItem(id);
};
