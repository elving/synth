import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { TextProps } from './Text'

interface LabelProps extends TextProps {
  /**
   * The elements you want to display within the label component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type LabelComponentProps = React.HTMLAttributes<HTMLLabelElement> &
  React.RefAttributes<HTMLLabelElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & LabelProps

type LabelComponent = SynthReact.SynthComponent<
  LabelComponentProps,
  HTMLLabelElement
>

/**
 * @since 1.3.0
 */
declare const Label: LabelComponent

export { LabelComponent, LabelComponentProps, LabelProps }
export default Label
