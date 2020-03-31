import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface TextProps extends SynthReact.BoxProps {
  /**
   * The elements you want to display within the small component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type TextComponentProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & TextProps

type TextComponent = SynthReact.SynthComponent<TextComponentProps, HTMLElement>

/**
 * @since 2.0.0
 */
declare const Text: TextComponent

export { TextComponent, TextComponentProps, TextProps }
export default Text
