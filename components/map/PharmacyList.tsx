"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import type { PharmacyType } from "@/types/map/types"

interface PharmacyListProps {
  filteredPharmacies: PharmacyType[]
  handleSelectPharmacy: (index: number | null) => void
  getTodayHours: (pharmacy: PharmacyType) => string
  formatDistance: (lat: number, lon: number) => string
}

export const PharmacyList: React.FC<PharmacyListProps> = ({
  filteredPharmacies,
  handleSelectPharmacy,
  getTodayHours,
  formatDistance,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">약국 목록</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {filteredPharmacies.length > 0 ? (
            filteredPharmacies.map((pharmacy, index) => (
              <Card
                key={pharmacy.hpid}
                onClick={() => handleSelectPharmacy(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{pharmacy.duty_name}</h3>
                      <p className="text-sm text-muted-foreground">{pharmacy.duty_addr}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{getTodayHours(pharmacy)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs">
                        {formatDistance(Number(pharmacy.wgs84_lat), Number(pharmacy.wgs84_lon))}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-muted-foreground">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
