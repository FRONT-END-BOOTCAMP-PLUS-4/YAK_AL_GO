import { UsersRepository } from '../../../domain/repositories/UsersRepository';
import { UserHealthRepository } from '../../../domain/repositories/UserHealthRepository';
import { UserMedisRepository } from '../../../domain/repositories/UserMedisRepository';
import { User } from '../../../domain/entities/UsersEntity';
import { UserHealth } from '../../../domain/entities/UserHealthEntity';
import { UserMedis } from '../../../domain/entities/UserMedisEntity';
import { SignupDto } from './dto/SignupDto'; // 경로 수정

export class JoinUsecase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userHealthRepository: UserHealthRepository,
    private readonly userMedisRepository: UserMedisRepository
  ) {
    // 자동으로 this.usersRepository = usersRepository; 처리됨
  }

  async execute(dto: SignupDto): Promise<User> { // User 반환하도록 수정
    // 1. Users DB에 저장
    const now = new Date();

    // hpid 처리: 일반 사용자(member_type: 0)는 null, 약사(member_type: 1)는 실제 값
    const hpidValue = dto.member_type === 1 && dto.hpid ? dto.hpid : null;

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
      hpidValue       // 조건부 hpid 설정
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


    // 3. UserMedication DB에 저장 (itemSeq가 있는 경우만)
    if (dto.itemSeq && dto.itemSeq.length > 0) {
      const medications: UserMedis[] = [];
      
      // 시작일과 종료일 변환
      const startDate = dto.startDate ? new Date(dto.startDate) : null;
      const endDate = dto.endDate ? new Date(dto.endDate) : null;
      
      // 각 약품 코드마다 사용자 약물 정보 생성
      dto.itemSeq.forEach(itemSeq => {
        medications.push(new UserMedis(
          null, // DB에서 자동 생성
          createdUser.id,
          itemSeq,
          startDate,
          endDate
        ));
      });
      
      // 생성된 약물 정보를 DB에 저장
      await this.userMedisRepository.saveMedications(medications);
    }



    return createdUser; // 생성된 사용자 정보 반환
  }
}