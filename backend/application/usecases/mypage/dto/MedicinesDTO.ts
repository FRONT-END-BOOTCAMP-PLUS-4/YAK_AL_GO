export interface MedicinesDTO {
  item_seq: string;
  item_name: string;
  entp_name: string | null;
}

export interface MedicinesSearchParams {
  query: string;
}