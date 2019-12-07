import * as React from 'react'

import { FormRowProps } from './FormRow'

interface FormFieldProps extends FormRowProps {
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
   * Boolean flag used to determine if you want the form elements of the field to **not** be wrapped by a `label` element.
   */
  withoutLabelWrapper?: boolean
}

type FormFieldComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & FormFieldProps

type FormFieldComponent = SynthReact.SynthComponent<
  FormFieldComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const FormField: FormFieldComponent

export { FormFieldComponent, FormFieldComponentProps, FormFieldProps }
export default FormField
