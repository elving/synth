import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import {
  NORMAL,
  ALIGN_CONTENT,
  ALIGN_ITEMS,
  FLEX_START,
  JUSTIFY_CONTENT,
  PLACE_CONTENT,
} from './constants'

import {
  setCenter,
  setDirection,
  setDisplay,
  setFull,
  setProperty,
  setWrap,
} from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').FlexProps>}
 */
const StyledFlex = styled.div`
  ${setBaseStyles()}
  ${setDisplay()}
  ${setFull()}
  ${setWrap()}
  ${setCenter()}
  ${setDirection()}
  ${setProperty('flex')};
  ${setProperty('grow', 'flex-grow')};
  ${setProperty('basis', 'flex-basis')};
  ${setProperty('shrink', 'flex-shrink')};
  ${setProperty('alignItems', 'align-items')};
  ${setProperty('alignContent', 'align-content')};
  ${setProperty('placeContent', 'place-content')};
  ${setProperty('justifyContent', 'justify-content')};
`

const Flex = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').FlexProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <StyledFlex {...props} className={className} synth={synth} ref={ref} />
  ),
)

Flex.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `row`.
   */
  row: PropTypes.bool,
  /**
   * A boolean flag that if `true`, will set the element's `height` and `width`
   * CSS properties to `100%`.
   */
  full: PropTypes.bool,
  /**
   * The value to be assigned to the `flex` CSS property.
   */
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The value to be assigned to the `flex-grow` CSS property.
   */
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-wrap` CSS property will be `wrap`.
   */
  wrap: PropTypes.bool,
  /**
   * The value to be assigned to the `flex-basis` CSS property.
   */
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The value to be assigned to the `flex-shrink` CSS property.
   */
  shrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-wrap` CSS property will be `nowrap`.
   */
  nowrap: PropTypes.bool,
  /**
   * A boolean flag to determine what the value of the `display` CSS property
   * will be, if `true`, then the `display` CSS property will be `flex-inline`.
   */
  inline: PropTypes.bool,
  /**
   * A boolean flag to determine if the `children` of the flex component should be
   * centered. If `true`, then both the `align-items` and `justify-content`
   * CSS properties will be `center`.
   */
  center: PropTypes.bool,
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `column`.
   */
  column: PropTypes.bool,
  /**
   * A boolean flag that if true, will set the element's `width` CSS property
   * to `100%`.
   */
  fullWidth: PropTypes.bool,
  /**
   * A boolean flag that if true, will set the element's `height` CSS property
   * to `100%`.
   */
  fullHeight: PropTypes.bool,
  /**
   * The value to be assigned to the `align-items` CSS property.
   */
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `row-reverse`.
   */
  rowReverse: PropTypes.bool,
  /**
   * A boolean flag to determine what the value of the `flex-wrap` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `wrap-reverse`.
   */
  wrapReverse: PropTypes.bool,
  /**
   * The value to be assigned to the `align-content` CSS property.
   */
  alignContent: PropTypes.oneOf(ALIGN_CONTENT),
  /**
   * The value to be assigned to the `place-content` CSS property.
   */
  placeContent: PropTypes.oneOf(PLACE_CONTENT),
  /**
   * A boolean flag to determine what the value of the `flex-direction` CSS property
   * will be, if `true`, then the `flex-direction` CSS property will be `column-reverse`.
   */
  columnReverse: PropTypes.bool,
  /**
   * The value to be assigned to the `justify-content` CSS property.
   */
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT),
}

Flex.defaultProps = {
  className: '',
  row: false,
  full: false,
  flex: '',
  grow: 0,
  wrap: false,
  basis: '',
  shrink: 1,
  nowrap: false,
  inline: false,
  center: false,
  column: false,
  fullWidth: false,
  fullHeight: false,
  alignItems: FLEX_START,
  rowReverse: false,
  wrapReverse: false,
  alignContent: NORMAL,
  placeContent: NORMAL,
  columnReverse: false,
  justifyContent: FLEX_START,
}

Flex.displayName = 'Flex'

export default withSynth(Flex)
