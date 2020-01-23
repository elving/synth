import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface InputProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A string indicating which input type the <input> element represents.
   */
  type?: string
}

type InputComponentProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & InputProps

type InputComponent = SynthReact.SynthComponent<
  InputComponentProps,
  HTMLInputElement
>

/**
 * @since 1.0.0
 */
declare const Input: InputComponent

export { InputComponent, InputComponentProps, InputProps }
export default Input
