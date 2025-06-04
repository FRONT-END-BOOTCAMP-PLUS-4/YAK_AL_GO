'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MedicineWarningDialogProps {
  medicineName: string;
  warnings: {
    type: string;
    description: string;
    severity: string;
  }[];
  onConfirm?: () => void;
}

export function MedicineWarningDialog({
  medicineName,
  warnings,
  onConfirm,
}: MedicineWarningDialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (warnings && warnings.length > 0) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [warnings]);

  const handleConfirm = () => {
    setOpen(false);
    if (onConfirm) {
      onConfirm();
    }
  };

  const highSeverityWarnings = warnings.filter((warning) => warning.severity === 'high');
  const mediumSeverityWarnings = warnings.filter((warning) => warning.severity === 'medium');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-2 border-red-200">
        {/* Colored header bar */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 py-4 px-6">
          <DialogHeader className="pb-0">
            <DialogTitle className="flex items-center gap-2 text-white text-xl">
              <AlertTriangle className="h-6 w-6" />
              <span>의약품 복용 주의사항</span>
            </DialogTitle>
          </DialogHeader>
          <p className="text-white/90 text-sm mt-1">{medicineName} 복용 전 반드시 확인해주세요</p>
        </div>

        <div className="p-5 space-y-4">
          {/* Compact warning list */}
          <div className="grid grid-cols-1 gap-3">
            {highSeverityWarnings.map((warning, index) => (
              <div
                key={`high-${warning.type}-${index}`}
                className="flex items-start gap-2 bg-red-50 p-3 rounded-md border border-red-200"
              >
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-700">{warning.type}</p>
                  <p className="text-sm text-red-600">{warning.description}</p>
                </div>
              </div>
            ))}

            {mediumSeverityWarnings.map((warning, index) => (
              <div
                key={`medium-${warning.type}-${index}`}
                className="flex items-start gap-2 bg-amber-50 p-3 rounded-md border border-amber-200"
              >
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-700">{warning.type}</p>
                  <p className="text-sm text-amber-600">{warning.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* General safety tips */}
          <div className="bg-gray-100 p-3 rounded-md border border-gray-200">
            <div className="flex items-start gap-2">
              <div className="bg-gray-50 p-2 rounded-full mt-0.5">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">일반 주의사항</p>
                <ul className="text-sm text-gray-600 mt-1 space-y-0.5">
                  <li>• 다른 약물과의 상호작용을 확인하세요</li>
                  <li>• 알레르기 반응이 있는지 확인하세요</li>
                  <li>• 부작용 발생 시 즉시 복용을 중단하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="px-5 py-4 bg-gray-50 border-t flex flex-row justify-between">
          <Badge variant="outline" className="bg-white">
            안전한 복용을 위해 확인해주세요
          </Badge>
          <Button onClick={handleConfirm} className="bg-red-600 hover:bg-red-700">
            확인했습니다
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
