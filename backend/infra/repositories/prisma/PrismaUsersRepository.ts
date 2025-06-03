import prisma from '@/lib/prisma';
import { UsersRepository } from '../../../domain/repositories/UsersRepository';
import { User } from '../../../domain/entities/UsersEntity';

export class PrismaUsersRepository implements UsersRepository {
  async createUser(user: User): Promise<User> {
    try {
      const userData = await prisma.users.create({
        data: {
          name: user.name,
          email: user.email,
          photo: user.photo,
          birthyear: user.birthyear,
          gender: user.gender,
          member_type: user.member_type,
          created_at: user.created_at,
          deleted_at: user.deleted_at,
          hpid: user.hpid,
        },
      });

      return new User(
        userData.id,
        userData.name,
        userData.email,
        userData.photo,
        userData.birthyear,
        userData.gender,
        userData.member_type,
        userData.created_at,
        userData.deleted_at,
        userData.hpid
      );
    } catch (error: any) {
      // 오류 로깅 (서버 로그에만 표시)
      throw new Error('올바른 hpid를 대문자로 입력하세요.');
    }
  }

  async findById(userId: string): Promise<User | null> {
    try {
      const userData = await prisma.users.findUnique({
        where: { id: userId },
      });

      if (!userData) return null;

      return new User(
        userData.id,
        userData.name,
        userData.email,
        userData.photo,
        userData.birthyear,
        userData.gender,
        userData.member_type,
        userData.created_at,
        userData.deleted_at,
        userData.hpid
      );
    } catch (error: any) {
      throw new Error(`사용자 조회 실패: ${error.message}`);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const userData = await prisma.users.findUnique({
        where: { email },
      });

      if (!userData) return null;

      return new User(
        userData.id,
        userData.name,
        userData.email,
        userData.photo,
        userData.birthyear,
        userData.gender,
        userData.member_type,
        userData.created_at,
        userData.deleted_at,
        userData.hpid
      );
    } catch (error: any) {
      throw new Error(`사용자 조회 실패: ${error.message}`);
    }
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    try {
      const userData = await prisma.users.update({
        where: { id },
        data: {
          name: user.name,
          email: user.email,
          photo: user.photo,
          birthyear: user.birthyear,
          gender: user.gender,
          member_type: user.member_type,
          created_at: user.created_at,
          deleted_at: user.deleted_at,
          hpid: user.hpid,
        },
      });

      return new User(
        userData.id,
        userData.name,
        userData.email,
        userData.photo,
        userData.birthyear,
        userData.gender,
        userData.member_type,
        userData.created_at,
        userData.deleted_at,
        userData.hpid
      );
    } catch (error: any) {
      throw new Error(`사용자 수정 실패: ${error.message}`);
    }
  }
}
