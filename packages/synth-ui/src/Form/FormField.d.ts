import * as React from 'react'
import { SynthFormRowProps } from './FormRow'

interface SynthFormFieldProps extends SynthFormRowProps {
  /**
   * The error message (if any) associated with the form elements displayed on the field.
   */
  error?: string
  /**
   * Used to provide an optional hint or instruction message related with the form elements displayed on the field.
   */
  hint?: React.ReactNode
  /**
   * Used to provide an optional label or title related with the form elements displayed on the field.
   */
  label?: React.ReactNode
  /**
   * A React `ref` object that will point to the field's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
  /**
   * Boolean flag used to determine if you want the form elements of the field to **not** be wrapped by a `label` element.
   */
  withoutLabelWrapper?: boolean
}

type SynthFormFieldComponent = React.ComponentType<SynthFormFieldProps>
declare const FormField: React.ForwardRefExoticComponent<SynthFormFieldProps>

export { SynthFormFieldComponent, SynthFormFieldProps }
export default FormField
