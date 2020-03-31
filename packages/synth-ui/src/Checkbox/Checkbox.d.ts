import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface CheckboxProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * Used for displaying text along with the checkbox input.
   */
  label?: string
  /**
   * Boolean flag to determine if the checkbox should **not** be wrapper around a `label` element.
   */
  withoutLabelWrapper?: boolean
}

type CheckboxComponentProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & CheckboxProps

type CheckboxComponent = SynthReact.SynthComponent<
  CheckboxComponentProps,
  HTMLInputElement
>

/**
 * @since 1.0.0
 */
declare const Checkbox: CheckboxComponent

export { CheckboxComponent, CheckboxComponentProps, CheckboxProps }
export default Checkbox
