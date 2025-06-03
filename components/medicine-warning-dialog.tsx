"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Info, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface MedicineWarningDialogProps {
  medicineName: string
  warnings: {
    type: string
    description: string
    severity: string
  }[]
  onConfirm?: () => void
}

export function MedicineWarningDialog({ medicineName, warnings, onConfirm }: MedicineWarningDialogProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // 디버깅 로그 추가
    console.log('MedicineWarningDialog useEffect:', {
      warnings: warnings,
      warningsLength: warnings.length,
      hasHighSeverity: warnings.some((warning) => warning.severity === "high"),
      highSeverityWarnings: warnings.filter((warning) => warning.severity === "high")
    });

    // Only show warning if there are high severity warnings
    const hasHighSeverity = warnings.some((warning) => warning.severity === "high")
    if (hasHighSeverity) {
      console.log('다이얼로그를 표시합니다.');
      setOpen(true)
    } else {
      console.log('높은 위험도 경고가 없어 다이얼로그를 표시하지 않습니다.');
    }
  }, [warnings])

  const handleConfirm = () => {
    setOpen(false)
    if (onConfirm) {
      onConfirm()
    }
  }

  const highSeverityWarnings = warnings.filter((warning) => warning.severity === "high")
  const mediumSeverityWarnings = warnings.filter((warning) => warning.severity === "medium")

  // 심각도별 아이콘 및 색상 설정
  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          icon: <AlertTriangle className="h-4 w-4" />,
          variant: "destructive" as const,
          bgColor: "bg-red-50 border-red-200",
          textColor: "text-red-800"
        }
      case "medium":
        return {
          icon: <AlertCircle className="h-4 w-4" />,
          variant: "default" as const,
          bgColor: "bg-yellow-50 border-yellow-200", 
          textColor: "text-yellow-800"
        }
      default:
        return {
          icon: <Info className="h-4 w-4" />,
          variant: "default" as const,
          bgColor: "bg-blue-50 border-blue-200",
          textColor: "text-blue-800"
        }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            중요한 복용 주의사항
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
            <Info className="h-5 w-5 text-primary" />
            <p className="text-sm">
              <span className="font-semibold text-primary">{medicineName}</span> 복용 전 다음 주의사항을 반드시 확인해주세요.
            </p>
          </div>

          {/* 높은 위험도 경고 */}
          {highSeverityWarnings.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-destructive flex items-center gap-2">
                {/* <AlertTriangle className="h-4 w-4" /> */}
                ⚠️ 필수 확인 사항
              </h4>
              {highSeverityWarnings.map((warning, index) => {
                const style = getSeverityStyle(warning.severity);
                return (
                  <Alert key={index} variant={style.variant} className={style.bgColor}>
                    <div className="flex items-start gap-3">
                      {style.icon}
                      <div>
                        <div className={`font-semibold ${style.textColor}`}>
                          {warning.type}
                        </div>
                        <AlertDescription className={style.textColor}>
                          {warning.description}
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                );
              })}
            </div>
          )}

          {/* 중간 위험도 경고 */}
          {mediumSeverityWarnings.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-600 flex items-center gap-2">
                {/* <AlertCircle className="h-4 w-4" /> */}
                💡 추가 주의사항
              </h4>
              {mediumSeverityWarnings.slice(0, 3).map((warning, index) => {
                const style = getSeverityStyle(warning.severity);
                return (
                  <Alert key={index} variant={style.variant} className={style.bgColor}>
                    <div className="flex items-start gap-3">
                      {style.icon}
                      <div>
                        <div className={`font-semibold ${style.textColor}`}>
                          {warning.type}
                        </div>
                        <AlertDescription className={style.textColor}>
                          {warning.description}
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                );
              })}
              {mediumSeverityWarnings.length > 3 && (
                <p className="text-sm text-muted-foreground text-center">
                  +{mediumSeverityWarnings.length - 3}개의 추가 주의사항이 상세 페이지에 있습니다.
                </p>
              )}
            </div>
          )}

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-primary font-medium">
              ✅ 위 주의사항을 모두 확인했으며, 해당되는 사항이 있다면 복용하지 않겠습니다.
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button onClick={handleConfirm} className="bg-primary">
            주의사항을 확인했습니다
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
