import * as React from 'react'
import { useCallback, useState, JSX } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ErrorBoundary } from 'react-error-boundary'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import KatexRenderer from '@/components/editor/editor-ui/katex-renderer'

type Props = {
  initialEquation?: string
  onConfirm: (equation: string, inline: boolean) => void
}

export default function KatexEquationAlterer({
  onConfirm,
  initialEquation = '',
}: Props): JSX.Element {
  const [editor] = useLexicalComposerContext()
  const [equation, setEquation] = useState<string>(initialEquation)
  const [inline, setInline] = useState<boolean>(true)

  const onClick = useCallback(() => {
    onConfirm(equation, inline)
  }, [onConfirm, equation, inline])

  const onCheckboxChange = useCallback(() => {
    setInline(!inline)
  }, [setInline, inline])

  return (
    <>
      <div className="flex items-center space-x-2">
        <Label htmlFor="inline-toggle" className="text-sm font-medium">
          Inline
        </Label>
        <Checkbox
          id="inline-toggle"
          checked={inline}
          onCheckedChange={onCheckboxChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="equation-input" className="text-sm font-medium">
          Equation
        </Label>
        {inline ? (
          <Input
            id="equation-input"
            onChange={(event) => setEquation(event.target.value)}
            value={equation}
            placeholder="Enter inline equation..."
          />
        ) : (
          <Textarea
            id="equation-input"
            onChange={(event) => setEquation(event.target.value)}
            value={equation}
            placeholder="Enter block equation..."
            className="min-h-[100px]"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Visualization</Label>
        <div className="rounded-md border bg-muted p-4">
          <ErrorBoundary onError={(e) => editor._onError(e)} fallback={null}>
            <KatexRenderer
              equation={equation}
              inline={false}
              onDoubleClick={() => null}
            />
          </ErrorBoundary>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onClick}>Confirm</Button>
      </div>
    </>
  )
}
