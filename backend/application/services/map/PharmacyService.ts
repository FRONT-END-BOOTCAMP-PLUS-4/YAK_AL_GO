import { GetPharmaciesUseCase } from "../../usecases/map/GetPharmaciesUseCase"
import { GetPharmacyDetailUseCase } from "../../usecases/map/GetPharmacyDetailUseCase"
import { CalculateDistanceUseCase } from "../../usecases/map/CalculateDistanceUseCase"
import { CheckPharmacyOpenStatusUseCase } from "../../usecases/map/CheckPharmacyOpenStatusUseCase"
import type {
  PharmacySearchRequestDto,
  PharmacySearchResponseDto,
  PharmacyDetailDto,
  PharmacyDto,
} from "../../usecases/map/dto/PharmacyDto"

export class PharmacyService {
  private getPharmaciesUseCase: GetPharmaciesUseCase
  private getPharmacyDetailUseCase: GetPharmacyDetailUseCase
  private calculateDistanceUseCase: CalculateDistanceUseCase
  private checkPharmacyOpenStatusUseCase: CheckPharmacyOpenStatusUseCase

  constructor() {
    this.getPharmaciesUseCase = new GetPharmaciesUseCase()
    this.getPharmacyDetailUseCase = new GetPharmacyDetailUseCase()
    this.calculateDistanceUseCase = new CalculateDistanceUseCase()
    this.checkPharmacyOpenStatusUseCase = new CheckPharmacyOpenStatusUseCase()
  }

  async searchPharmacies(request: PharmacySearchRequestDto): Promise<PharmacySearchResponseDto> {
    return await this.getPharmaciesUseCase.execute(request)
  }

  getPharmacyDetail(pharmacy: PharmacyDto): PharmacyDetailDto {
    return this.getPharmacyDetailUseCase.execute(pharmacy)
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    return this.calculateDistanceUseCase.execute(lat1, lon1, lat2, lon2)
  }

  formatDistance(distance: number): string {
    return this.calculateDistanceUseCase.formatDistance(distance)
  }

  checkPharmacyOpenStatus(pharmacy: PharmacyDto, day: number, hour: number, minute: number): boolean {
    return this.checkPharmacyOpenStatusUseCase.execute(pharmacy, day, hour, minute)
  }
}
