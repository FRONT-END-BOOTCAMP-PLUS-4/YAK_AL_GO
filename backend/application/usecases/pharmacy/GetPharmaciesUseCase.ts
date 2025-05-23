import type { PharmacyDto, PharmacySearchRequestDto, PharmacySearchResponseDto } from "../../../dto/pharmacy.dto"
import prisma from "../../../../lib/prisma"
import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase"
import { CheckPharmacyOpenStatusUseCase } from "./CheckPharmacyOpenStatusUseCase"

export class GetPharmaciesUseCase {
  private calculateDistanceUseCase: CalculateDistanceUseCase
  private checkPharmacyOpenStatusUseCase: CheckPharmacyOpenStatusUseCase

  constructor() {
    this.calculateDistanceUseCase = new CalculateDistanceUseCase()
    this.checkPharmacyOpenStatusUseCase = new CheckPharmacyOpenStatusUseCase()
  }

  async execute(request: PharmacySearchRequestDto): Promise<PharmacySearchResponseDto> {
    try {
      let pharmacies: PharmacyDto[]

      if (request.medicine && request.medicine !== "전체") {
        // Get pharmacies that have the specified medicine in inventory
        const pharmaciesWithMedicine = await prisma.pharmacies.findMany({
          include: {
            inventories: {
              where: {
                medicines: {
                  item_name: {
                    contains: request.medicine,
                  },
                },
              },
              include: {
                medicines: true,
              },
            },
          },
        })
        pharmacies = pharmaciesWithMedicine as PharmacyDto[]
      } else {
        // Get all pharmacies with their inventories
        const allPharmacies = await prisma.pharmacies.findMany({
          include: {
            inventories: {
              include: {
                medicines: true,
              },
            },
          },
        })
        pharmacies = allPharmacies as PharmacyDto[]
      }

      // Apply search query filter
      if (request.searchQuery) {
        pharmacies = pharmacies.filter(
          (pharmacy) =>
            pharmacy.duty_name.includes(request.searchQuery!) ||
            pharmacy.duty_addr.includes(request.searchQuery!) ||
            pharmacy.inventories.some((inv) => inv.medicines.item_name.includes(request.searchQuery!)),
        )
      }

      // Calculate distance and check open status
      pharmacies = pharmacies.map((pharmacy) => {
        let distance = 0
        if (request.location) {
          distance = this.calculateDistanceUseCase.execute(
            request.location.lat,
            request.location.lng,
            Number(pharmacy.wgs84_lat),
            Number(pharmacy.wgs84_lon),
          )
        }

        const isOpen = this.checkPharmacyOpenStatusUseCase.execute(
          pharmacy,
          request.day || new Date().getDay(),
          request.hour || new Date().getHours(),
          request.minute || new Date().getMinutes(),
        )

        return {
          ...pharmacy,
          distance,
          isOpen,
        }
      })

      // Filter by open status if requested
      if (request.showOnlyOpen) {
        pharmacies = pharmacies.filter((pharmacy) => pharmacy.isOpen)
      }

      // Sort by distance if location is provided
      if (request.location) {
        pharmacies.sort((a, b) => (a.distance || 0) - (b.distance || 0))
      }

      return {
        pharmacies,
        totalCount: pharmacies.length,
      }
    } catch (error) {
      console.error("Error in GetPharmaciesUseCase:", error)
      throw new Error("약국 데이터를 가져오는데 실패했습니다.")
    }
  }
}
