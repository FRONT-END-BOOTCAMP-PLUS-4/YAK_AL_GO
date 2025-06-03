import { HealthRepository } from '../../../domain/repositories/mypage/HealthRepository';
import { HealthDTO } from './dto/HealthDTO';

export class GetHealthUseCase {
  constructor(private readonly healthRepository: HealthRepository) {}

  async execute(userId: string): Promise<HealthDTO[]> {
    const healths = await this.healthRepository.findByUserId(userId);
    return healths.map(health => ({
      id: health.id,
      healthId: health.healthId,
      healthName: health.healthName
    }));
  }
}