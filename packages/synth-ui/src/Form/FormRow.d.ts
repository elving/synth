import * as React from 'react'
import * as styled from 'styled-components'
import * as SynthReact from '@beatgig/synth-react'

interface FormRowProps {
  /**
   * Boolean flag to determine if the elements in the row should be centered.
   */
  centered?: boolean
  /**
   * The elements you want to display within the form row.
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
}

type FormRowComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & FormRowProps

type FormRowComponent = SynthReact.SynthComponent<
  FormRowComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const FormRow: FormRowComponent

export { FormRowComponent, FormRowComponentProps, FormRowProps }
export default FormRow
