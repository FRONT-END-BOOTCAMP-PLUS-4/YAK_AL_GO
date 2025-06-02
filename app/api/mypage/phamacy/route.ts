import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { GetPhamacyUseCase } from '@/backend/application/usecases/mypage/GetPhamacyUseCase';
import { PhamacyRepository } from '@/backend/domain/repositories/mypage/PhamacyRepository';
import { Phamacy } from '@/backend/domain/entities/mypage/Phamacy';

class PrismaPhamacyRepository implements PhamacyRepository {
  async findByHpid(hpid: string): Promise<Phamacy | null> {
    const pharmacy = await prisma.pharmacies.findUnique({
      where: { hpid },
      select: {
        hpid: true,
        duty_name: true,
        duty_addr: true,
      },
    });

    if (!pharmacy) {
      return null;
    }

    return new Phamacy(
      pharmacy.hpid,
      pharmacy.duty_name,
      pharmacy.duty_addr
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hpid = searchParams.get('hpid');

  if (!hpid) {
    return NextResponse.json({ error: 'HPID is required' }, { status: 400 });
  }

  try {
    const phamacyRepository = new PrismaPhamacyRepository();
    const getPhamacyUseCase = new GetPhamacyUseCase(phamacyRepository);
    const result = await getPhamacyUseCase.execute(hpid);

    if (!result) {
      return NextResponse.json({ error: 'Pharmacy not found' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching pharmacy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pharmacy data' },
      { status: 500 }
    );
  }
}