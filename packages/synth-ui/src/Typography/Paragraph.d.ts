import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { TextProps } from './Text'

interface ParagraphProps extends TextProps {
  /**
   * The elements you want to display within the paragraph component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type ParagraphComponentProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ParagraphProps

type ParagraphComponent = SynthReact.SynthComponent<
  ParagraphComponentProps,
  HTMLElement
>

/**
 * @since 1.2.0
 */
declare const Paragraph: ParagraphComponent

export { ParagraphComponent, ParagraphComponentProps, ParagraphProps }
export default Paragraph
