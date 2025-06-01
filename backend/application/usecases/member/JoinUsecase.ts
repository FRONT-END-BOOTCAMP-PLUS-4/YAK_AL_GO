import { UsersRepository } from '../../../domain/repositories/UsersRepository';
import { UserHealthRepository } from '../../../domain/repositories/UserHealthRepository';
import { User } from '../../../domain/entities/UsersEntity';
import { UserHealth } from '../../../domain/entities/UserHealthEntity';

interface TokenData {
  name: string;
  photo: string;
  email: string;
}

interface FormData {
  member_type: number;
  birthyear: number;
  hpid: string;
  pregnent: number;
  allergy: number;
  hypertension: number;
  diabetes: number;
  heartDisease: number;
  liverDisease: number;
  kidneyDisease: number;
}

export class CreateSignupUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userHealthRepository: UserHealthRepository
  ) {
    // 자동으로 this.usersRepository = usersRepository; 처리됨
  }

  async execute(formData: FormData, tokenData: TokenData): Promise<void> {
    // 1. Users DB에 저장
    const now = new Date();

    const newUser = new User(
      '', // DB에서 UUID 자동 생성
      tokenData.name,
      tokenData.email,
      tokenData.photo,
      formData.birthyear,
      null,
      formData.member_type,
      now,
      null,
      formData.hpid
    );

    const createdUser = await this.usersRepository.createUser(newUser);
    // 세션에 넣기 위해 반환 예정


    // 2. UserHealth DB에 저장 (0이 아닌 값만)
    const healthConditions: UserHealth[] = [];
    const healthFieldMap = {
      pregnent: 1,
      allergy: 2,
      hypertension: 3,
      diabetes: 4,
      heartDisease: 5,
      liverDisease: 6,
      kidneyDisease: 7
    };

    Object.entries(healthFieldMap).forEach(([fieldName, healthId]) => {
      // 매핑 객체를 순회하며 처리
      const fieldValue = formData[fieldName as keyof typeof healthFieldMap];
      // 폼데이터에서 해당 필드값 추출 (타입 안전성 보장)
      if (fieldValue !== 0 && fieldValue !== undefined) {
        // 0이 아니고 undefined가 아닌 경우만 처리
        healthConditions.push(new UserHealth(
          createdUser.id, //50번 코드에서 생성된 사용자 ID
          healthId        // healthId는 0이 아닌 값만 저장
        ));

        //         healthConditions = [
        //          new UserHealth("uuid-legun-123", 2), // allergy
        //          new UserHealth("uuid-legun-123", 4), // diabetes
        //          new UserHealth("uuid-legun-123", 6)  // liverDisease
        //          ]

      }
    });

    if (healthConditions.length > 0) {
      await this.userHealthRepository.saveHealth(healthConditions);
      // +----+------------------+----------+
      // | id | userId           | healthId |
      // +----+------------------+----------+
      // | 1  | uuid-legun-123   |    2     |  ← allergy
      // | 2  | uuid-legun-123   |    4     |  ← diabetes  
      // | 3  | uuid-legun-123   |    6     |  ← liverDisease
      // +----+------------------+----------+
    }
  }
}