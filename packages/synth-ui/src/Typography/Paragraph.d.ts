import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface ParagraphProps extends SynthReact.TextProps {
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

type ParagraphComponentProps = React.HTMLAttributes<HTMLParagraphElement> &
  React.RefAttributes<HTMLParagraphElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ParagraphProps

type ParagraphComponent = SynthReact.SynthComponent<
  ParagraphComponentProps,
  HTMLParagraphElement
>

/**
 * @since 1.3.0
 */
declare const Paragraph: ParagraphComponent

export { ParagraphComponent, ParagraphComponentProps, ParagraphProps }
export default Paragraph
