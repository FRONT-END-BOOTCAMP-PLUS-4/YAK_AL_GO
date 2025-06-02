import { PhamacyRepository } from '../../../domain/repositories/mypage/PhamacyRepository';
import { PhamacyDTO } from './dto/PhamacyDTO';

export class GetPhamacyUseCase {
  constructor(private readonly phamacyRepository: PhamacyRepository) {}

  async execute(hpid: string): Promise<PhamacyDTO | null> {
    const phamacy = await this.phamacyRepository.findByHpid(hpid);
    
    if (!phamacy) {
      return null;
    }

    return {
      name: phamacy.dutyName,
      address: phamacy.dutyAddr
    };
  }
}