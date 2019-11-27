import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthIntentInterface {
  /**
   * The component's intent will determine it's text and background color.
   */
  intent?: 'none' | 'danger' | 'success' | 'highlight'
}

interface SynthTextProps
  extends SynthIntentInterface,
    SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The elements you want to display within the text component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the text component's DOM element.
   */
  ref?: React.Ref<HTMLSpanElement>
}

type SynthTextComponent = React.ForwardRefExoticComponent<SynthTextProps>

declare const Text: React.ForwardRefExoticComponent<SynthTextProps>

export { SynthIntentInterface, SynthTextComponent, SynthTextProps }
export default Text
