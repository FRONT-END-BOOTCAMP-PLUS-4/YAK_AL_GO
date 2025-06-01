import { NextRequest, NextResponse } from "next/server";
import { SignupDto } from "@/backend/application/usecases/member/dto/SignupDto";
import { JoinUsecase } from "@/backend/application/usecases/member/JoinUsecase";
import { PrismaUsersRepository } from "@/backend/infra/repositories/prisma/PrismaUsersRepository";
import { PrismaUserHealthRepository } from "@/backend/infra/repositories/prisma/PrismaUserHealthRepository";
import { getServerSession } from "next-auth/next";

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'missing session : 인증이 필요합니다.' }, { status: 401 });
        }

        const dto = new SignupDto(
            session.user?.name || '',
            session.user?.email || '',
            session.user?.image || '',
            parseInt(body.birthyear),
            body.member_type,
            body.hpid,
            body.pregnent,
            body.allergy,
            body.hypertension,
            body.diabetes,
            body.heartDisease,
            body.liverDisease,
            body.kidneyDisease
        );

        const usersRepository = new PrismaUsersRepository();
        const userHealthRepository = new PrismaUserHealthRepository();
        // 주입
        const joinUsecase = new JoinUsecase(usersRepository, userHealthRepository);
        
        const createdUser = await joinUsecase.execute(dto);

        return NextResponse.json({ 
            message: "회원가입 성공",
            user: {
                id: createdUser.id,
                name: createdUser.name,
                email: createdUser.email,
                photo: createdUser.photo,
                birthyear: createdUser.birthyear,
                member_type: createdUser.member_type,
                hpid: createdUser.hpid
            }
        }, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message || "회원가입 실패" },
                { status: 400 },
            );
        }
        return NextResponse.json(
            { message: "알 수 없는 오류 발생" },
            { status: 500 },
        );
    }
}