import type { Ref, RefObject, JSX } from 'react'
import * as React from 'react'
import { ChangeEvent, forwardRef } from 'react'

type BaseEquationEditorProps = {
  equation: string
  inline: boolean
  setEquation: (equation: string) => void
}

function EquationEditor(
  { equation, setEquation, inline }: BaseEquationEditorProps,
  forwardedRef: Ref<HTMLInputElement | HTMLTextAreaElement>
): JSX.Element {
  const onChange = (event: ChangeEvent) => {
    setEquation((event.target as HTMLInputElement).value)
  }

  return inline && forwardedRef instanceof HTMLInputElement ? (
    <span className="EquationEditor_inputBackground bg-background">
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        $
      </span>
      <input
        className="EquationEditor_inlineEditor m-0 resize-none border-0 bg-inherit p-0 text-primary outline-none"
        value={equation}
        onChange={onChange}
        autoFocus={true}
        ref={forwardedRef as RefObject<HTMLInputElement>}
      />
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        $
      </span>
    </span>
  ) : (
    <div className="EquationEditor_inputBackground bg-background">
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        {'$$\n'}
      </span>
      <textarea
        className="EquationEditor_blockEditor m-0 w-full resize-none border-0 bg-inherit p-0 text-primary outline-none"
        value={equation}
        onChange={onChange}
        ref={forwardedRef as RefObject<HTMLTextAreaElement>}
      />
      <span className="EquationEditor_dollarSign text-left text-muted-foreground">
        {'\n$$'}
      </span>
    </div>
  )
}

export default forwardRef(EquationEditor)
