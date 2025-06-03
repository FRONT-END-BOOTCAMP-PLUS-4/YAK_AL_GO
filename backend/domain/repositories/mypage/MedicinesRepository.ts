import { Medicines } from '../../entities/mypage/Medicines';

export interface MedicinesRepository {
  searchMedicines(query: string): Promise<Medicines[]>;
}