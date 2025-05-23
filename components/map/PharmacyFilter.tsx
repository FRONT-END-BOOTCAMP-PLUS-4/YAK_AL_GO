"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PopoverContent } from "@/components/ui/popover";

interface PharmacyFilterProps {
  selectedMedicine: string;
  setSelectedMedicine: (medicine: string) => void;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
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
  selectedDay,
  setSelectedDay,
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
  showOnlyOpen,
  setShowOnlyOpen,
  resetFilters,
  medicines,
}) => {
  // 시간 입력 처리
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록
    if (/^\d*$/.test(value)) {
      // 0-23 범위 내에서만 허용
      const hour = Number.parseInt(value, 10);
      if (!value || (hour >= 0 && hour <= 23)) {
        setSelectedHour(value);
      }
    }
  };

  // 분 입력 처리
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록
    if (/^\d*$/.test(value)) {
      // 0-59 범위 내에서만 허용
      const minute = Number.parseInt(value, 10);
      if (!value || (minute >= 0 && minute <= 59)) {
        setSelectedMinute(value);
      }
    }
  };

  // 요일 선택 시 dayNumber 상태 업데이트
  const handleDayChange = (value: string) => {
    setSelectedDay(value);
  };

  return (
    <PopoverContent className="w-80">
      <div className="space-y-4">
        <h3 className="font-medium">필터</h3>
        <div className="space-y-2">
          <Label htmlFor="medicine">약품</Label>
          <Select value={selectedMedicine} onValueChange={setSelectedMedicine}>
            <SelectTrigger id="medicine">
              <SelectValue placeholder="약품 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="전체">전체</SelectItem>
              {medicines.map((medicine) => (
                <SelectItem key={medicine} value={medicine}>
                  {medicine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 요일 선택 */}
        <div className="space-y-2">
          <Label htmlFor="day">요일</Label>
          <Select value={selectedDay} onValueChange={handleDayChange}>
            <SelectTrigger id="day">
              <SelectValue placeholder="요일 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">월요일</SelectItem>
              <SelectItem value="2">화요일</SelectItem>
              <SelectItem value="3">수요일</SelectItem>
              <SelectItem value="4">목요일</SelectItem>
              <SelectItem value="5">금요일</SelectItem>
              <SelectItem value="6">토요일</SelectItem>
              <SelectItem value="0">일요일</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 시간과 분 입력 (한 줄에 배치) */}
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

        {/* 영업중 필터링 옵션 */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showOnlyOpen"
            checked={showOnlyOpen}
            onChange={(e) => setShowOnlyOpen(e.target.checked)}
            className="h-4 w-4"
          />
          <Label htmlFor="showOnlyOpen" className="text-sm cursor-pointer">
            영업중인 약국만 보기
          </Label>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={resetFilters}>
            초기화
          </Button>
        </div>
      </div>
    </PopoverContent>
  );
};
