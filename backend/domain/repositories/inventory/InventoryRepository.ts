import { InventoryItem } from '@/backend/domain/entities/inventory/InventoryItem';
import { Medicine } from '@/backend/domain/entities/inventory/Medicine';

export interface InventoryRepository {
  getInventoryByHpid(hpid: string): Promise<InventoryItem[]>;
  addInventoryItem(hpid: string, itemSeq: string, quantity: number): Promise<void>;
  updateInventoryStock(id: number, stock: number): Promise<void>;
  deleteInventoryItem(id: number): Promise<void>;
  getAllMedicines(): Promise<Medicine[]>;
}
