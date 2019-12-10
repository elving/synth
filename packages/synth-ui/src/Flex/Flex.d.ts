import * as CSS from 'csstype'
import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface FlexProps {
  /**
   * The elements you want to display within the flex component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `row`.
   */
  row?: boolean
  /**
   * A boolean flag that if `true`, will set the element's `height` and `width`
   * CSS properties to `100%`.
   */
  full?: boolean
  /**
   * The value to be assigned to the `flex` CSS property.
   */
  flex?: CSS.FlexProperty
  /**
   * The value to be assigned to the `flex-grow` CSS property.
   */
  grow?: CSS.GlobalsNumber
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-wrap` CSS property will be `wrap`.
   */
  wrap?: boolean
  /**
   * The value to be assigned to the `flex-basis` CSS property.
   */
  basis?: CSS.FlexBasisProperty
  /**
   * The value to be assigned to the `flex-shrink` CSS property.
   */
  shrink?: CSS.GlobalsNumber
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-wrap` CSS property will be `nowrap`.
   */
  nowrap?: boolean
  /**
   * A boolean flag to determine what the value of the `display` CSS property
   * will be, if `true`, then the `display` CSS property will be `flex-inline`.
   */
  inline?: boolean
  /**
   * A boolean flag to determine if the `children` of the flex component should be
   * centered. If `true`, then both the `align-items` and `justify-content`
   * CSS properties will be `center`.
   */
  center?: boolean
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `column`.
   */
  column?: boolean
  /**
   * A boolean flag that if true, will set the element's `width` CSS property
   * to `100%`.
   */
  fullWidth?: boolean
  /**
   * A boolean flag that if true, will set the element's `height` CSS property
   * to `100%`.
   */
  fullHeight?: boolean
  /**
   * The value to be assigned to the `align-items` CSS property.
   */
  alignItems?: CSS.AlignItemsProperty
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `row-reverse`.
   */
  rowReverse?: boolean
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `wrap-reverse`.
   */
  wrapReverse?: boolean
  /**
   * The value to be assigned to the `align-content` CSS property.
   */
  alignContent?: CSS.AlignContentProperty
  /**
   * The value to be assigned to the `place-content` CSS property.
   */
  placeContent?: CSS.PlaceContentProperty
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `column-reverse`.
   */
  columnReverse?: boolean
  /**
   * The value to be assigned to the `justify-content` CSS property.
   */
  justifyContent?: CSS.JustifyContentProperty
}

type FlexComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & FlexProps

type FlexComponent = SynthReact.SynthComponent<
  FlexComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Flex: FlexComponent

export { FlexComponent, FlexProps, FlexComponentProps }

export default Flex
