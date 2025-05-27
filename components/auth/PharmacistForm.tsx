import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PharmacistForm({ formData, handleInputChange }: any) {
  return (
    <div className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="hpid">약국 ID (HPID)</Label>
        <Input
          id="hpid"
          name="hpid"
          placeholder="약국 ID를 입력하세요"
          value={formData.hpid}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
}