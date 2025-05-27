import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const medicineList = [
  { id: 1, name: "타이레놀" },
  { id: 2, name: "판콜에이" },
  { id: 3, name: "게보린" },
  { id: 4, name: "베아제" },
  { id: 5, name: "훼스탈골드" },
]

export default function SignupMedicationStep({ formData, setFormData }: any) {

    const [searchTerm, setSearchTerm] = useState("")
    const [showResults, setShowResults] = useState(false)
    const [selectedMedicines, setSelectedMedicines] = useState<{ id: number; name: string }[]>([])
    const [medicationTimes, setMedicationTimes] = useState<string[]>([])

      // 약 검색 결과 필터링
  const filteredMedicines = medicineList.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 약 선택 핸들러
  const handleSelectMedicine = (medicine: { id: number; name: string }) => {
    if (!selectedMedicines.some((m) => m.id === medicine.id)) {
      setSelectedMedicines([...selectedMedicines, medicine])
    }
    setSearchTerm("")
    setShowResults(false)
  }

  // 약 삭제 핸들러
  const handleRemoveMedicine = (id: number) => {
    setSelectedMedicines(selectedMedicines.filter((medicine) => medicine.id !== id))
  }

  // 복용 시간 토글 핸들러
  const handleTimeToggle = (time: string) => {
    if (medicationTimes.includes(time)) {
      setMedicationTimes(medicationTimes.filter((t) => t !== time))
    } else {
      setMedicationTimes([...medicationTimes, time])
    }
  }
    
  return (
    <div className="space-y-4">
      {/* 복용 중인 약 */}
      <div className="space-y-2">
        <Label>복용 중인 약</Label>
        <div className="relative">
          <Input
            placeholder="약 이름을 검색하세요"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
          />
          {showResults && searchTerm && (
            <div className="absolute w-full mt-1 bg-background border rounded-md shadow-lg z-10">
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map((medicine) => (
                  <button
                    type="button"
                    key={medicine.id}
                    className="w-full text-left p-2 hover:bg-muted cursor-pointer"
                    onClick={() => handleSelectMedicine(medicine)}
                  >
                    {medicine.name}
                  </button>
                ))
              ) : (
                <div className="p-2 text-muted-foreground">검색 결과가 없습니다</div>
              )}
            </div>
          )}
        </div>
        <div className="mt-2 space-y-2">
          {selectedMedicines.map((medicine) => (
            <div key={medicine.id} className="flex items-center justify-between p-2 border rounded-md">
              <span>{medicine.name}</span>
              <Button variant="outline" size="sm" onClick={() => handleRemoveMedicine(medicine.id)}>
                삭제
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* 복용 시간 */}
      <div className="space-y-2">
        <Label>복용 시간</Label>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const time = `${i.toString().padStart(2, "0")}:00`;
            return (
              <Button
                key={i}
                variant={medicationTimes.includes(time) ? "default" : "outline"}
                size="sm"
                onClick={() => handleTimeToggle(time)}
              >
                {time}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}