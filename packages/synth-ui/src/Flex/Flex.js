import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import {
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

const Flex = withSynth(StyledFlex)

Flex.propTypes = {
  ...Flex.propTypes,
  row: PropTypes.bool,
  full: PropTypes.bool,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrap: PropTypes.bool,
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  nowrap: PropTypes.bool,
  inline: PropTypes.bool,
  center: PropTypes.bool,
  column: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  rowReverse: PropTypes.bool,
  wrapReverse: PropTypes.bool,
  alignContent: PropTypes.oneOf(ALIGN_CONTENT),
  placeContent: PropTypes.oneOf(PLACE_CONTENT),
  columnReverse: PropTypes.bool,
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT),
}

Flex.defaultProps = {
  alignItems: FLEX_START,
  justifyContent: FLEX_START,
}

export default Flex
