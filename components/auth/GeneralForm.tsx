import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GeneralForm({ formData, setFormData }: any) {
  const handleCheckboxChange = (field: string, value: number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="age">나이</Label>
        <Input
          id="birthyear"
          name="birthyear"
          type="number"
          placeholder="나이를 입력하세요"
          value={formData.birthyear}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, birthyear: e.target.value }))}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>건강 상태</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pregnant"
              checked={formData.pregnent === 1}
              onCheckedChange={(checked) => handleCheckboxChange("pregnent", checked ? 1 : 0)}
            />
            <Label htmlFor="pregnant">임산부</Label>
          </div>
        </div>
      </div>
      {/* 질병 정보 */}
      <div className="space-y-2">
        <Label htmlFor="disease">질병 정보</Label>
        <div className="space-y-2">
          {[
            { id: "hypertension", label: "고혈압", value: 3 },
            { id: "diabetes", label: "당뇨", value: 4 },
            { id: "heartDisease", label: "심장질환", value: 5 },
            { id: "liverDisease", label: "간질환", value: 6 },
            { id: "kidneyDisease", label: "신장질환", value: 7 },
            { id: "allergy", label: "알레르기", value: 2 },
          ].map((disease) => (
            <div key={disease.id} className="flex items-center space-x-2">
              <Checkbox
                id={disease.id}
                checked={formData[disease.id] === disease.value}
                onCheckedChange={(checked) => handleCheckboxChange(disease.id, checked ? disease.value : 0)}
              />
              <Label htmlFor={disease.id}>{disease.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}