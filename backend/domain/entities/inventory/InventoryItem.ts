export type InventoryStatus = 'normal' | 'low' | 'out';

export interface InventoryItem {
  id: number;
  itemSeq: string;
  name: string;
  company: string;
  type: string;
  stock: number;
  status?: InventoryStatus;
}
