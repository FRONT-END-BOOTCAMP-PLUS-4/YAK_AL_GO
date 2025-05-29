import { InventoryRepository } from '@/backend/domain/repositories/inventory/InventoryRepository';

export const addInventoryItem = async (
  hpid: string,
  itemSeq: string,
  quantity: number,
  repository: InventoryRepository
): Promise<void> => {
  await repository.addInventoryItem(hpid, itemSeq, quantity);
};
