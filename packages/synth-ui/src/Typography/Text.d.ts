import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

type TextIntent = 'none' | 'danger' | 'success' | 'highlight'

//React.HTMLAttributes<HTMLSpanElement>
interface TextProps {
  /**
   * The elements you want to display within the text component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The intent will determine the text and background color.
   */
  intent?: TextIntent
  /**
   * A scale index from the `fontSizes` synth token.
   */
  scale?: number
}

type TextComponentProps = React.HTMLAttributes<HTMLSpanElement> &
  React.RefAttributes<HTMLSpanElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & TextProps

type TextComponent = SynthReact.SynthComponent<
  TextComponentProps,
  HTMLSpanElement
>

/**
 * @since 1.2.0
 */
declare const Text: TextComponent

export { TextComponent, TextComponentProps, TextIntent, TextProps }
export default Text
