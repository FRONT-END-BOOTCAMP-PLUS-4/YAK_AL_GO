export interface MedicineDTO {
  id: number;
  name: string;
  startDate: string | null;
  endDate: string;
  active: boolean;
  item_seq: string;
}

export interface CreateMedicineDTO {
  userId: string;
  itemSeq: string;
  startDate: string;
  endDate?: string;
}