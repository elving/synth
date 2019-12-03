import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthCheckboxProps
  extends SynthReact.SynthComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
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
   * A React `ref` object that will point to the input's DOM element.
   */
  ref?: React.Ref<HTMLInputElement>
  /**
   * Boolean flag to determine if the checkbox should **not** be wrapper around a `label` element.
   */
  withoutLabelWrapper?: boolean
}

type SynthCheckboxComponent = React.ComponentType<SynthCheckboxProps>

/**
 * @since 1.0.0
 */
declare const Checkbox: React.ForwardRefExoticComponent<SynthCheckboxProps>

export { SynthCheckboxComponent, SynthCheckboxProps }
export default Checkbox
