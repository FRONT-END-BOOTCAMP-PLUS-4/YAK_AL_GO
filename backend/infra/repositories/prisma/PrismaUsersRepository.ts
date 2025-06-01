import { PrismaClient } from '@prisma/client';
import { UsersRepository } from '../../../domain/repositories/UsersRepository';
import { User } from '../../../domain/entities/UsersEntity';

export class PrismaUsersRepository implements UsersRepository {
    private prisma = new PrismaClient();

    async createUser(user: User): Promise<User> {
        try {
            const userData = await this.prisma.users.create({
                data: {
                    id: user.id, // UUID는 DB에서 자동 생성되므로 빈 문자열로 설정
                    name: user.name,
                    email: user.email,
                    photo: user.photo,
                    birthyear: user.birthyear,
                    gender : user.gender,
                    member_type: user.member_type,
                    created_at: user.created_at,
                    deleted_at: user.deleted_at,
                    hpid: user.hpid

                }
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
            throw new Error(`사용자 생성 실패: ${error.message}`);
        }
    }

    async findById(userId: string): Promise<User | null> {
        try {
            const userData = await this.prisma.users.findUnique({
                where: { id: userId }
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
            const userData = await this.prisma.users.findUnique({
                where: { email }
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
            const userData = await this.prisma.users.update({
                where: { id },
                data: {
                    id: user.id, // UUID는 DB에서 자동 생성되므로 빈 문자열로 설정
                    name: user.name,
                    email: user.email,
                    photo: user.photo,
                    birthyear: user.birthyear,
                    gender : user.gender,
                    member_type: user.member_type,
                    created_at: user.created_at,
                    deleted_at: user.deleted_at,
                    hpid: user.hpid
                }
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