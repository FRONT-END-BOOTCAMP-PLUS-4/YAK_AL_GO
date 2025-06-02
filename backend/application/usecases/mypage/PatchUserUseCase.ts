import { UserRepository } from '../../../domain/repositories/mypage/UserRepository';
import { UserDTO, WithdrawUserDTO } from './dto/UserDTO';

export class PatchUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: WithdrawUserDTO): Promise<UserDTO> {
    await this.userRepository.withdraw(params.userId);
    
    return {
      id: params.userId,
      message: 'User withdrawn successfully'
    };
  }
}