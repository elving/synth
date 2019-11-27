import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import { SynthIntentInterface } from './Text'

interface SynthLabelProps
  extends SynthIntentInterface,
    SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLLabelElement> {
  /**
   * The elements you want to display within the label component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the label component's DOM element.
   */
  ref?: React.Ref<HTMLLabelElement>
}

type SynthLabelComponent = React.ForwardRefExoticComponent<SynthLabelProps>

declare const Label: React.ForwardRefExoticComponent<SynthLabelProps>

export { SynthLabelComponent, SynthLabelProps }
export default Label
