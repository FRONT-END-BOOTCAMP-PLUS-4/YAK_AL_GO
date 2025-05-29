import { NextResponse } from 'next/server';
import { PrismaInventoryRepository } from '@/backend/domain/repositories/inventory/PrismaInventoryRepository';
import { getMedicinesList } from '@/backend/application/usecases/inventory/getMedicinesList';

const repository = new PrismaInventoryRepository();

export async function GET() {
  try {
    const medicines = await getMedicinesList(repository);
    return NextResponse.json(medicines);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load medicines' }, { status: 500 });
  }
}
