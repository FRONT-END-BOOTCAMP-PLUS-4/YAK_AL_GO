import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { GetHealthUseCase } from '@/backend/application/usecases/mypage/GetHealthUseCase';
import { HealthRepository } from '@/backend/domain/repositories/mypage/HealthRepository';
import { Health } from '@/backend/domain/entities/mypage/Health';

class PrismaHealthRepository implements HealthRepository {
  async findByUserId(userId: string): Promise<Health[]> {
    const userHealths = await prisma.user_healths.findMany({
      where: { userId },
      include: { healths: true },
    });

    return userHealths.map(
      (uh) =>
        new Health(
          uh.id,
          uh.healthId,
          uh.healths.health_name,
        )
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
    const healthRepository = new PrismaHealthRepository();
    const getHealthUseCase = new GetHealthUseCase(healthRepository);
    const result = await getHealthUseCase.execute(userId);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching user healths:', error);
    return NextResponse.json(
      { error: 'Failed to fetch health data' },
      { status: 500 }
    );
  }
}