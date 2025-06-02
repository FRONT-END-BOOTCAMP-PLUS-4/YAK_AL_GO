import { NextRequest, NextResponse } from "next/server";
import { SignupDto } from "@/backend/application/usecases/member/dto/SignupDto";
import { JoinUsecase } from "@/backend/application/usecases/member/JoinUsecase";
import { PrismaUsersRepository } from "@/backend/infra/repositories/prisma/PrismaUsersRepository";
import { PrismaUserHealthRepository } from "@/backend/infra/repositories/prisma/PrismaUserHealthRepository";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("요청 본문:", body);

        const session = await getServerSession(authOptions);
        console.log("현재 세션:", session);
        
        if (!session) {
            console.log("세션이 없음");
            return NextResponse.json({ message: 'missing session : 인증이 필요합니다.' }, { status: 401 });
        }
        
        // hpid 처리: 빈 문자열이면 null로 변환
        const hpidValue = body.hpid && body.hpid.trim() !== '' ? body.hpid : null;
        
        const dto = new SignupDto(
            session.user?.name || '',
            session.user?.email || '',
            session.user?.photo || '',
            parseInt(body.birthyear),
            body.member_type,
            hpidValue, // 전처리된 hpid 사용
            body.pregnent,
            body.allergy,
            body.hypertension,
            body.diabetes,
            body.heartDisease,
            body.liverDisease,
            body.kidneyDisease
        );
        
        console.log("생성된 DTO:", dto);
        
        // 인스턴스 생성
        const usersRepository = new PrismaUsersRepository();
        const userHealthRepository = new PrismaUserHealthRepository();
        // 주입
        const joinUsecase = new JoinUsecase(usersRepository, userHealthRepository);
        
        console.log("UseCase 실행 시작");
        const createdUser = await joinUsecase.execute(dto);
        console.log("UseCase 실행 완료:", createdUser);

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
        console.error("API 에러:", error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message || "회원가입 실패", stack: error.stack },
                { status: 400 },
            );
        }
        return NextResponse.json(
            { message: "알 수 없는 오류 발생" },
            { status: 500 },
        );
    }
}