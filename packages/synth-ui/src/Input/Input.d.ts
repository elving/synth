import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthInputProps
  extends SynthReact.SynthComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the input's DOM element.
   */
  ref?: React.Ref<HTMLInputElement>
}

type SynthInputComponent = React.ForwardRefExoticComponent<SynthInputProps>
declare const Input: React.ForwardRefExoticComponent<SynthInputProps>

export { SynthInputComponent, SynthInputProps }
export default Input
