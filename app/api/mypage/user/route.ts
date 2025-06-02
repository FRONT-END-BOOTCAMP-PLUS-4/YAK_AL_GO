import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { UserRepository } from '@/backend/domain/repositories/mypage/UserRepository';
import { PatchUserUseCase } from '@/backend/application/usecases/mypage/PatchUserUseCase';

class PrismaUserRepository implements UserRepository {
  async withdraw(userId: string): Promise<void> {
    await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const userRepository = new PrismaUserRepository();
    const patchUserUseCase = new PatchUserUseCase(userRepository);
    const result = await patchUserUseCase.execute({ userId });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error withdrawing user:', error);
    return NextResponse.json(
      { error: 'Failed to withdraw user' },
      { status: 500 }
    );
  }
}