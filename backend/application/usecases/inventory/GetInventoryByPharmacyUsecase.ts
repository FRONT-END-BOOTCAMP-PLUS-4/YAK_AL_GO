import { InventoryRepository } from '@/backend/domain/repositories/inventory/InventoryRepository';
import { InventoryItem } from '@/backend/domain/entities/inventory/InventoryItem';

export const getInventoryByPharmacy = async (
  hpid: string,
  repository: InventoryRepository
): Promise<InventoryItem[]> => {
  const inventory = await repository.getInventoryByHpid(hpid);
  return inventory.map((item) => ({
    ...item,
    status: determineStatus(item.stock),
  }));
};

function determineStatus(stock: number): 'normal' | 'low' | 'out' {
  if (stock === 0) return 'out';
  if (stock < 10) return 'low';
  return 'normal';
}
