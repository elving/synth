import * as CSS from 'csstype'
import * as React from 'react'

import { SynthComponent } from '../../withSynth'

interface BoxProps {
  /**
   * The elements you want to display within this box component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The value to be assigned to the `border` CSS property.
   */
  border?: CSS.BorderProperty<string | number>
  /**
   * The value to be assigned to the `height` CSS property.
   */
  height?: CSS.HeightProperty<string | number>
  /**
   * The value to be assigned to the `margin` CSS property.
   */
  margin?: CSS.MarginProperty<string | number>
  /**
   * The value to be assigned to the `max-height` CSS property.
   */
  maxHeight?: CSS.MaxHeightProperty<string | number>
  /**
   * The value to be assigned to the `max-width` CSS property.
   */
  maxWidth?: CSS.MaxWidthProperty<string | number>
  /**
   * The value to be assigned to the `min-height` CSS property.
   */
  minHeight?: CSS.MinHeightProperty<string | number>
  /**
   * The value to be assigned to the `min-width` CSS property.
   */
  minWidth?: CSS.MinWidthProperty<string | number>
  /**
   * The value to be assigned to the `padding` CSS property.
   */
  padding?: CSS.PaddingProperty<string | number>
  /**
   * The value to be assigned to the `width` CSS property.
   */
  width?: CSS.WidthProperty<string | number>
  /**
   * A boolean flag to determine if the component should *not* include `base`
   * token values as defaults.
   */
  withoutDefaults?: boolean
}

type BoxComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & BoxProps

type BoxComponent = SynthComponent<BoxComponentProps, HTMLDivElement>

/**
 * @since 1.1.0
 */
declare const Box: BoxComponent

export { BoxComponent, BoxProps, BoxComponentProps }
export default Box
