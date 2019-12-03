import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthFlexProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
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
  flex?: number | string
  /**
   * The value to be assigned to the `flex-grow` CSS property.
   */
  grow?: number | string
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-wrap` CSS property will be `wrap`.
   */
  wrap?: boolean
  /**
   * The value to be assigned to the `flex-basis` CSS property.
   */
  basis?: number | string
  /**
   * The value to be assigned to the `flex-shrink` CSS property.
   */
  shrink?: number | string
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
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset'
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
  alignContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'normal'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset'
  /**
   * The value to be assigned to the `place-content` CSS property.
   */
  placeContent?:
    | 'center start'
    | 'start center'
    | 'end left'
    | 'flex-start center'
    | 'flex-end center'
    | 'baseline center'
    | 'first baseline space-evenly'
    | 'last baseline right'
    | 'space-between space-evenly'
    | 'space-around space-evenly'
    | 'space-evenly stretch'
    | 'stretch space-evenly'
    | 'inherit'
    | 'initial'
    | 'unset'
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `column-reverse`.
   */
  columnReverse?: boolean
  /**
   * The value to be assigned to the `justify-content` CSS property.
   */
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset'
  /**
   * A React `ref` object that will point to the flex component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
}

type SynthFlexComponent = React.ComponentType<SynthFlexProps>

/**
 * @since 1.0.0
 */
declare const Flex: React.ForwardRefExoticComponent<SynthFlexProps>

export { SynthFlexComponent, SynthFlexProps }
export default Flex
