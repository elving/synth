import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthFormRowProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Boolean flag to determine if the elements in the row should be centered.
   */
  centered?: boolean
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * Boolean flag to determine if the each element(s) in the row should take all the horizontal space.
   */
  fullWidth?: boolean
  /**
   * Boolean flag to determine if the each element(s) in the row should be displayed inline.
   */
  inline?: boolean
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthFormRowComponent = React.ComponentType<SynthFormRowProps>
declare const FormRow: React.ForwardRefExoticComponent<SynthFormRowProps>

export { SynthFormRowComponent, SynthFormRowProps }
export default FormRow
