import prisma from '@/lib/prisma';
import { UserMedisRepository } from '../../../domain/repositories/UserMedisRepository';
import { UserMedis } from '../../../domain/entities/UserMedisEntity';

export class PrismaUserMedisRepository implements UserMedisRepository {
  async saveMedications(medications: UserMedis[]): Promise<void> {
    try {
      // 배치로 여러 약물 정보를 한 번에 저장
      await prisma.user_medis.createMany({
        data: medications.map(med => ({
          userId: med.userId,
          itemSeq: med.itemSeq,
          start_date: med.start_date,
          end_date: med.end_date
        }))
      });
    } catch (error: any) {
      throw new Error(`약물 정보 저장 실패: ${error.message}`);
    }
  }

  async findMedicationsByUserId(userId: string): Promise<UserMedis[]> {
    try {
      const medicationRecords = await prisma.user_medis.findMany({
        where: { userId },
      });
      
      return medicationRecords.map(record => new UserMedis(
        record.id,
        record.userId,
        record.itemSeq,
        record.start_date,
        record.end_date
      ));
    } catch (error: any) {
      throw new Error(`약물 정보 조회 실패: ${error.message}`);
    }
  }
}