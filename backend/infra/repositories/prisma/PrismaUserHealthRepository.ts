import prisma from '@/lib/prisma';
import { UserHealthRepository } from '../../../domain/repositories/UserHealthRepository';
import { UserHealth } from '../../../domain/entities/UserHealthEntity';

export class PrismaUserHealthRepository implements UserHealthRepository {
  async saveHealth(healthData: UserHealth[]): Promise<void> {
    try {
      // 배치로 여러 건강 정보를 한 번에 저장
      await prisma.user_healths.createMany({
        data: healthData.map(health => ({
          userId: health.userId,
          healthId: health.healthId
        }))
      });
    } catch (error: any) {
      throw new Error(`건강 정보 저장 실패: ${error.message}`);
    }
  }

  async findHealthByUserId(userId: string): Promise<UserHealth[]> {
    try {
      const healthRecords = await prisma.user_healths.findMany({
        where: { userId },
        select: {
          userId: true,
          healthId: true
        }
      });

      return healthRecords.map((record : { userId: string; healthId: number }) => new UserHealth(
        record.userId,
        record.healthId
      ));
    } catch (error: any) {
      throw new Error(`건강 정보 조회 실패: ${error.message}`);
    }
  }
}