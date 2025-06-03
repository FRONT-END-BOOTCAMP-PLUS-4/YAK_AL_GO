import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { GetMedicinesUseCase } from '@/backend/application/usecases/mypage/GetMedicinesUseCase';
import { MedicinesRepository } from '@/backend/domain/repositories/mypage/MedicinesRepository';
import { Medicines } from '@/backend/domain/entities/mypage/Medicines';

class PrismaMedicinesRepository implements MedicinesRepository {
  async searchMedicines(query: string): Promise<Medicines[]> {
    const medicines = await prisma.medicines.findMany({
      where: {
        OR: [
          { item_name: { contains: query, mode: 'insensitive' } },
          { entp_name: { contains: query, mode: 'insensitive' } },
        ],
      },
      select: {
        item_seq: true,
        item_name: true,
        entp_name: true,
      },
    });

    return medicines.map(
      med => new Medicines(
        med.item_seq,
        med.item_name,
        med.entp_name
      )
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const medicinesRepository = new PrismaMedicinesRepository();
    const getMedicinesUseCase = new GetMedicinesUseCase(medicinesRepository);
    const result = await getMedicinesUseCase.execute(query);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error searching medicines:', error);
    return NextResponse.json(
      { error: 'Failed to search medicines' }, 
      { status: 500 }
    );
  }
}