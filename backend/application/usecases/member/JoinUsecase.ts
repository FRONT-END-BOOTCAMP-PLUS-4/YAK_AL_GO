import { UsersRepository } from '../../../domain/repositories/UsersRepository';
import { UserHealthRepository } from '../../../domain/repositories/UserHealthRepository';
import { User } from '../../../domain/entities/UsersEntity';
import { UserHealth } from '../../../domain/entities/UserHealthEntity';
import { SignupDto } from './dto/SignupDto'; // 경로 수정

export class JoinUsecase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userHealthRepository: UserHealthRepository
  ) {
    // 자동으로 this.usersRepository = usersRepository; 처리됨
  }

  async execute(dto: SignupDto): Promise<User> { // User 반환하도록 수정
    // 1. Users DB에 저장
    const now = new Date();

    const newUser = new User(
      '', // DB에서 UUID 자동 생성
      dto.name,        // tokenData.name → dto.name
      dto.email,       // tokenData.email → dto.email
      dto.photo,       // tokenData.photo → dto.photo
      dto.birthyear,   // formData.birthyear → dto.birthyear
      null,
      dto.member_type, // formData.member_type → dto.member_type
      now,
      null,
      dto.hpid        // formData.hpid → dto.hpid
    );

    const createdUser = await this.usersRepository.createUser(newUser);

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
      // formData → dto로 수정
      const fieldValue = dto[fieldName as keyof typeof healthFieldMap];
      if (fieldValue !== 0 && fieldValue !== undefined) {
        healthConditions.push(new UserHealth(
          createdUser.id,
          healthId
        ));
      }
    });

    if (healthConditions.length > 0) {
      await this.userHealthRepository.saveHealth(healthConditions);
    }

    return createdUser; // 생성된 사용자 정보 반환
  }
}