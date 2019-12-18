import * as CSS from 'csstype'
import * as React from 'react'

import { SynthComponent } from '../../withSynth'

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
   * The value to be assigned to the `color` CSS property.
   */
  color?: CSS.ColorProperty
  /**
   * The value to be assigned to the `text-decoration` CSS property.
   */
  decoration?: CSS.TextDecorationProperty<string | number>
  /**
   * The value to be assigned to the `font-family` CSS property.
   */
  font?: CSS.FontFamilyProperty
  /**
   * The value to be assigned to the `line-height` CSS property.
   */
  lineHeight?: CSS.LineHeightProperty<string | number>
  /**
   * The value to be assigned to the `font-size` CSS property.
   */
  size?: CSS.FontSizeProperty<string | number>
  /**
   * The value to be assigned to the `letter-spacing` CSS property.
   */
  spacing?: CSS.LetterSpacingProperty<string | number>
  /**
   * The value to be assigned to the `text-transform` CSS property.
   */
  transform?: CSS.TextTransformProperty | string
  /**
   * The value to be assigned to the `font-weight` CSS property.
   */
  weight?: CSS.FontWeightProperty | number | string
  /**
   * A boolean flag to determine if the component should *not* include `base`
   * token values as defaults.
   */
  withoutDefaults?: boolean
}

type TextComponentProps = React.HTMLAttributes<HTMLSpanElement> &
  React.RefAttributes<HTMLSpanElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & TextProps

type TextComponent = SynthComponent<TextComponentProps, HTMLSpanElement>

/**
 * @since 1.1.0
 */
declare const Text: TextComponent

export { TextComponent, TextComponentProps, TextProps }
export default Text
