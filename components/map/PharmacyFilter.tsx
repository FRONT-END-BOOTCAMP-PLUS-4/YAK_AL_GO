"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PharmacyFilterProps {
  selectedMedicine: string;
  setSelectedMedicine: (medicine: string) => void;
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
  selectedHour: string;
  setSelectedHour: (hour: string) => void;
  selectedMinute: string;
  setSelectedMinute: (minute: string) => void;
  showOnlyOpen: boolean;
  setShowOnlyOpen: (show: boolean) => void;
  resetFilters: () => void;
  medicines: string[];
}

export const PharmacyFilter: React.FC<PharmacyFilterProps> = ({
  selectedMedicine,
  setSelectedMedicine,
  selectedDays,
  setSelectedDays,
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
  showOnlyOpen,
  setShowOnlyOpen,
  resetFilters,
  medicines,
}) => {
  // 사용자가 입력한 검색어 상태
  const [medicineQuery, setMedicineQuery] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState<string[]>([]);

  // 검색어가 변경될 때마다 필터링된 약품 리스트 갱신
  useEffect(() => {
    if (medicineQuery.trim() === "") {
      setFilteredMedicines([]);
    } else {
      const lowerQuery = medicineQuery.toLowerCase();
      const filtered = medicines
        .filter((m) => m.toLowerCase().includes(lowerQuery))
        .slice(0, 100); // 최대 100개만 표시
      setFilteredMedicines(filtered);
    }
  }, [medicineQuery, medicines]);

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const hour = Number.parseInt(value, 10);
      if (!value || (hour >= 0 && hour <= 23)) {
        setSelectedHour(value);
      }
    }
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const minute = Number.parseInt(value, 10);
      if (!value || (minute >= 0 && minute <= 59)) {
        setSelectedMinute(value);
      }
    }
  };

  const handleDayChange = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const days = [
    { value: "1", label: "월요일" },
    { value: "2", label: "화요일" },
    { value: "3", label: "수요일" },
    { value: "4", label: "목요일" },
    { value: "5", label: "금요일" },
    { value: "6", label: "토요일" },
    { value: "0", label: "일요일" },
  ];

  return (
    <PopoverContent className="w-80">
      <div className="space-y-4">
        {/* 약품 검색 입력창 */}
        <div className="space-y-2">
          <Label>약품 검색</Label>
          <Input
            id="medicine-search"
            placeholder="약품명을 입력하세요"
            value={medicineQuery}
            onChange={(e) => setMedicineQuery(e.target.value)}
          />

          {selectedMedicine && (
            <div className="text-sm text-muted-foreground mt-1">
              <Badge key={selectedMedicine} variant="outline">
                {selectedMedicine === "전체" ? "모든 약품" : selectedMedicine}
              </Badge>
            </div>
          )}

          {medicineQuery && (
            <div className="border rounded max-h-60 overflow-y-auto mt-2">
              {medicineQuery === "전체" && (
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setSelectedMedicine("전체");
                    setMedicineQuery("");
                  }}
                >
                  전체
                </button>
              )}
              {filteredMedicines.map((med) => (
                <button
                  key={med}
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setSelectedMedicine(med);
                    setMedicineQuery("");
                  }}
                >
                  {med}
                </button>
              ))}
              {filteredMedicines.length === 0 && (
                <div className="px-2 py-1 text-sm text-muted-foreground">
                  검색 결과 없음
                </div>
              )}
            </div>
          )}
        </div>

        {/* 요일 선택 */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="days">
              <AccordionTrigger className="py-2">
                <Label>요일 (다중 선택 가능)</Label>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {days.map((day) => (
                    <div
                      key={day.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`day-${day.value}`}
                        checked={selectedDays.includes(day.value)}
                        onCheckedChange={() => handleDayChange(day.value)}
                      />
                      <Label
                        htmlFor={`day-${day.value}`}
                        className="text-sm cursor-pointer"
                      >
                        {day.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 시간/분 */}
        <div className="space-y-2">
          <Label>시간</Label>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={selectedHour}
              onChange={handleHourChange}
              placeholder="시"
              className="w-1/2"
            />
            <span>:</span>
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={selectedMinute}
              onChange={handleMinuteChange}
              placeholder="분"
              className="w-1/2"
            />
          </div>
        </div>

        {/* 영업중만 보기 */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="showOnlyOpen"
            checked={showOnlyOpen}
            onCheckedChange={(checked) => setShowOnlyOpen(checked === true)}
          />
          <Label htmlFor="showOnlyOpen" className="text-sm cursor-pointer">
            영업중인 약국만 보기
          </Label>
        </div>

        {/* 초기화 */}
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={resetFilters}>
            초기화
          </Button>
        </div>
      </div>
    </PopoverContent>
  );
};
