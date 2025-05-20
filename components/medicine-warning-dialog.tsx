"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

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
    // Only show warning if there are high severity warnings
    const hasHighSeverity = warnings.some((warning) => warning.severity === "high")
    if (hasHighSeverity) {
      setOpen(true)
    }
  }, [warnings])

  const handleConfirm = () => {
    setOpen(false)
    if (onConfirm) {
      onConfirm()
    }
  }

  const highSeverityWarnings = warnings.filter((warning) => warning.severity === "high")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            중요 주의사항
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4 font-medium">{medicineName} 약품은 다음 주의사항이 있습니다:</p>
          <ul className="space-y-2 list-disc pl-5">
            {highSeverityWarnings.map((warning, index) => (
              <li key={index} className="text-destructive">
                <span className="font-medium">{warning.type}:</span> {warning.description}
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={handleConfirm}>확인하였습니다</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
