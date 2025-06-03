import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

interface Medicine {
  item_seq: string;
  item_name: string;
  entp_name: string;
}

export default function SignupMedicationStep({ formData, setFormData }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedMedicines, setSelectedMedicines] = useState<Medicine[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 의약품 검색 API 호출
  const searchMedicines = async (query: string) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(`/api/mypage/medicinedb?query=${encodeURIComponent(query)}`);
      if (response.ok) {
        const medicines = await response.json();
        setSearchResults(medicines);
      } else {
        console.error('의약품 검색 실패:', response.statusText);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('의약품 검색 중 오류 발생:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // 검색어 변경 시 API 호출 (디바운싱)
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm) {
        searchMedicines(searchTerm);
      } else {
        setSearchResults([]);
      }
    }, 300); // 300ms 디바운싱

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  // 약 선택 핸들러
  const handleSelectMedicine = (medicine: Medicine) => {
    if (!selectedMedicines.some((m) => m.item_seq === medicine.item_seq)) {
      const newSelectedMedicines = [...selectedMedicines, medicine];
      setSelectedMedicines(newSelectedMedicines);
// 부모 컴포넌트의 formData 업데이트
    setFormData({
      ...formData,
      itemSeq: newSelectedMedicines.map(m => m.item_seq)
    });
      
    }
    setSearchTerm("");
    setShowResults(false);
    setSearchResults([]);
  };

  // 약 삭제 핸들러
  const handleRemoveMedicine = (itemSeq: string) => {
    const newSelectedMedicines = selectedMedicines.filter(medicine => medicine.item_seq !== itemSeq);
    setSelectedMedicines(newSelectedMedicines);
    // 부모 컴포넌트의 formData 업데이트
  setFormData({
    ...formData,
    itemSeq: newSelectedMedicines.map(m => m.item_seq)
  });
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newStartDate = e.target.value;
  setStartDate(newStartDate);

  if (endDate && new Date(endDate) < new Date(newStartDate)) {
    setEndDate("");
  }
  setFormData({
    ...formData,
    startDate: newStartDate
  });
};

// 복용 종료일 변경 핸들러
const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newEndDate = e.target.value;
  
  // 종료일이 시작일보다 이전인지 확인

  if (startDate && new Date(newEndDate) < new Date(startDate)) {
    alert("종료일은 시작일 이후여야 합니다.");
    return;
  }

  setEndDate(newEndDate);

  setFormData({
    ...formData,
    endDate: newEndDate
  });
};

  return (
    <div className="space-y-4">
      {/* 복용 중인 약 */}
      <div className="space-y-2">
        <Label className ="text-lg font - medium">복용 중인 약</Label>
        <div className="relative">
          <Input
            placeholder="약 이름을 검색하세요 (2글자 이상)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(e.target.value.length >= 2);
            }}
          />
          {showResults && searchTerm.length >= 2 && (
            <div className="absolute w-full mt-1 bg-background border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
              {isSearching ? (
                <div className="p-2 text-center text-muted-foreground">검색 중...</div>
              ) : searchResults.length > 0 ? (
                searchResults.map((medicine) => (
                  <button
                    type="button"
                    key={medicine.item_seq}
                    className="w-full text-left p-3 hover:bg-muted cursor-pointer border-b last:border-b-0"
                    onClick={() => handleSelectMedicine(medicine)}
                  >
                    <div className="font-medium">{medicine.item_name}</div>
                    <div className="text-sm text-muted-foreground">{medicine.entp_name}</div>
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
            <div key={medicine.item_seq} className="flex items-center justify-between p-3 border rounded-md bg-muted/20">
              <div>
                <div className="font-medium">{medicine.item_name}</div>
                <div className="text-sm text-muted-foreground">{medicine.entp_name}</div>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleRemoveMedicine(medicine.item_seq)}>
                삭제
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* 복용 기간 */}
      <div className="space-y-4">
        <Label className = "text-lg font-medium">복용 기간</Label>
        
        {/* 시작 날짜 */}
        <div className="space-y-2">
          <Label htmlFor="startDate">복용 시작일</Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            required
          />
        </div>


        

        {/* 종료 날짜 - 계속 복용이 아닐 때만 표시 */}
        {!isOngoing && (
          <div className="space-y-2">
            <Label htmlFor="endDate">복용 종료일</Label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={handleEndDateChange} // 시작일 이후만 선택 가능
              min={startDate}
              disabled = {!startDate} // 시작일이 없으면 비활성화
              
            
            />
            {!startDate && ( <p className = "text-xs text-muted-foreground">시작일을 먼저 선택해주세요.</p>
          )}
          </div>
        )}
      </div>
    </div>
  );
}