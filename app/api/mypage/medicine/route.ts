import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Medicine } from '@/backend/domain/entities/mypage/Medicine';
import { MedicineRepository } from '@/backend/domain/repositories/mypage/MedicineRepository';
import { GetMedicineUseCase } from '@/backend/application/usecases/mypage/GetMedicineUseCase';
import { DeleteMedicineUseCase } from '@/backend/application/usecases/mypage/DeleteMedicineUseCase';
import { PostMedicineUseCase } from '@/backend/application/usecases/mypage/PostMedicineUseCase';

class PrismaMedicineRepository implements MedicineRepository {
  async findByUserId(userId: string): Promise<Medicine[]> {
    const medicines = await prisma.user_medis.findMany({
      where: { userId },
      include: { medicines: true },
    });

    return medicines.map(med => new Medicine(
      med.id,
      med.itemSeq,
      med.medicines.item_name,
      med.start_date,
      med.end_date
    ));
  }

  async delete(id: number): Promise<void> {
    await prisma.user_medis.delete({
      where: { id }
    });
  }

  async create(userId: string, itemSeq: string, startDate: Date, endDate: Date | null): Promise<Medicine> {
    const medicine = await prisma.user_medis.create({
      data: {
        userId,
        itemSeq,
        start_date: startDate,
        end_date: endDate,
      },
      include: { medicines: true }
    });

    return new Medicine(
      medicine.id,
      medicine.itemSeq,
      medicine.medicines.item_name,
      medicine.start_date,
      medicine.end_date
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const medicineRepository = new PrismaMedicineRepository();
    const getMedicineUseCase = new GetMedicineUseCase(medicineRepository);
    const result = await getMedicineUseCase.execute(userId);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    return NextResponse.json({ error: 'Failed to fetch medicine data' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const medicineId = searchParams.get('medicineId');

  if (!medicineId) {
    return NextResponse.json({ error: 'Medicine ID is required' }, { status: 400 });
  }

  try {
    const medicineRepository = new PrismaMedicineRepository();
    const deleteMedicineUseCase = new DeleteMedicineUseCase(medicineRepository);
    await deleteMedicineUseCase.execute(parseInt(medicineId));

    return NextResponse.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    console.error('Error deleting medicine:', error);
    return NextResponse.json({ error: 'Failed to delete medicine' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.userId || !body.itemSeq || !body.startDate) {
    return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
  }

  try {
    const medicineRepository = new PrismaMedicineRepository();
    const postMedicineUseCase = new PostMedicineUseCase(medicineRepository);
    const result = await postMedicineUseCase.execute(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error adding medicine:', error);
    return NextResponse.json({ error: 'Failed to add medicine' }, { status: 500 });
  }
}