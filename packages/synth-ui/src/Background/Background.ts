import * as CSS from 'csstype'
import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { AspectRatioProps } from '../AspectRatio'

interface BackgroundProps extends AspectRatioProps {
  /**
   * The elements you want to display within this background component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The value to be assigned to the `background-clip` CSS property.
   */
  clip?: CSS.BackgroundClipProperty
  /**
   * The value to be assigned to the `background-size` CSS property.
   */
  size?: CSS.BackgroundSizeProperty<string | number>
  /**
   * The value to be assigned to the `background-color` CSS property. The
   * value also be a synth global or color:background token name.
   */
  color?: CSS.BackgroundColorProperty | string
  /**
   * The value to be assigned to the `background-image` CSS property.
   */
  image?: CSS.BackgroundImageProperty
  /**
   * The value to be assigned to the `background-origin` CSS property.
   */
  origin?: CSS.BackgroundOriginProperty
  /**
   * The value to be assigned to the `background-repeat` CSS property.
   */
  repeat?: CSS.BackgroundRepeatProperty
  /**
   * The value to be assigned to the `background-position` CSS property.
   */
  position?: CSS.BackgroundPositionProperty<string | number>
}

type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & BackgroundProps

type BackgroundComponent = SynthReact.SynthComponent<
  BackgroundComponentProps,
  HTMLDivElement
>

/**
 * @since 1.4.0
 */
declare const Background: BackgroundComponent

export { BackgroundComponent, BackgroundProps, BackgroundComponentProps }
export default Background
