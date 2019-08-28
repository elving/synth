import styled from 'styled-components'
import { bool, oneOf, number, string, oneOfType } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import { baseStyles } from '../../utils'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const END = 'end'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const LEFT = 'left'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const LAST = 'last'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const FIRST = 'first'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const RIGHT = 'right'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const START = 'start'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const UNSET = 'unset'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const NORMAL = 'normal'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const CENTER = 'center'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const INHERIT = 'inherit'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const INITIAL = 'initial'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const STRETCH = 'stretch'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const FLEX_END = 'flex-end'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SELF_END = 'self-end'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const BASELINE = 'baseline'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const FLEX_START = 'flex-start'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SELF_START = 'self-start'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SAFE_CENTER = 'safe center'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SPACE_AROUND = 'space-around'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SPACE_EVENLY = 'space-evenly'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const LAST_BASELINE = 'last baseline'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const UNSAFE_CENTER = 'unsafe center'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const SPACE_BETWEEN = 'space-between'

/**
 * @constant
 * @type {string}
 * @default
 * @private
 */
const FIRST_BASELINE = 'first baseline'

/**
 * @constant
 * @type {string[]}
 * @default
 * @private
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#Syntax}
 */
const ALIGN_ITEMS = [
  /**
   * Basic keywords
   */
  NORMAL,
  STRETCH,

  /**
   * Positional alignment
   */
  END,
  START,
  CENTER,
  FLEX_END,
  SELF_END,
  FLEX_START,
  SELF_START,

  /**
   * Baseline alignment
   */
  BASELINE,
  SAFE_CENTER,
  UNSAFE_CENTER,
  LAST_BASELINE,
  FIRST_BASELINE,

  /**
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @constant
 * @type {string[]}
 * @default
 * @private
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Syntax}
 */
const ALIGN_CONTENT = [
  /**
   * Normal alignment
   */
  NORMAL,

  /**
   * Basic positional alignment
   */
  END,
  START,
  CENTER,
  FLEX_END,
  FLEX_START,

  /**
   * Baseline alignment
   */
  BASELINE,
  LAST_BASELINE,
  FIRST_BASELINE,

  /**
   * Distributed alignment
   */
  STRETCH,
  SPACE_AROUND,
  SPACE_EVENLY,
  SPACE_BETWEEN,

  /**
   * Overflow alignment
   */
  SAFE_CENTER,
  UNSAFE_CENTER,

  /**
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @constant
 * @type {string[]}
 * @default
 * @private
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Syntax}
 */
const JUSTIFY_CONTENT = [
  /**
   * Normal alignment
   */
  NORMAL,

  /**
   * Positional alignment
   */
  END,
  LEFT,
  START,
  RIGHT,
  CENTER,
  FLEX_END,
  FLEX_START,

  /**
   * Distributed alignment
   */
  STRETCH,
  SPACE_AROUND,
  SPACE_EVENLY,
  SPACE_BETWEEN,

  /**
   * Overflow alignment
   */
  SAFE_CENTER,
  UNSAFE_CENTER,

  /**
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @constant
 * @type {string[]}
 * @default
 * @private
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-content#Syntax}
 */
const PLACE_CONTENT = [
  /**
   * Normal alignment
   */
  NORMAL,

  /**
   * Positional alignment
   */
  `${END} ${LEFT}`,
  `${START} ${CENTER}`,
  `${CENTER} ${START}`,
  `${FLEX_END} ${CENTER}`,
  `${FLEX_START} ${CENTER}`,

  /**
   * Baseline alignment
   */
  `${BASELINE} ${CENTER}`,
  `${LAST} ${BASELINE} ${RIGHT}`,
  `${FIRST} ${BASELINE} ${SPACE_EVENLY}`,

  /**
   * Distributed alignment
   */
  `${SPACE_EVENLY} ${STRETCH}`,
  `${STRETCH} ${SPACE_EVENLY}`,
  `${SPACE_AROUND} ${SPACE_EVENLY}`,
  `${SPACE_BETWEEN} ${SPACE_EVENLY}`,

  /**
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @constant
 * @type {string[]}
 * @default
 * @private
 */
const POSITIONAL_ALIGNMENT = [
  ...ALIGN_ITEMS,
  ...ALIGN_CONTENT,
  ...PLACE_CONTENT,
  ...JUSTIFY_CONTENT,
]

/**
 * Will set css rules based on the current component's props.
 *
 * @param {object} props - Component's props
 * @param {string} propName - The prop name to be evaluated or applied as is
 * @param {string} [cssPropName] - The prop name's css property equivalent
 */
const setProperty = (props, propName, cssPropName) => {
  const propValue = props[propName]

  /**
   * The `center` prop will override any positional alignment property.
   * @see {@link https://www.w3.org/TR/css-align-3/#positional-values}
   */
  if (props.center && POSITIONAL_ALIGNMENT.includes(propValue)) {
    return ''
  }

  /**
   * The `full`, `fullWidth`, `fullHeight` props override the `basis` prop.
   */
  if (
    propName === 'basis' &&
    (props.full || props.fullWidth || props.fullHeight)
  ) {
    return ''
  }

  return propValue ? `${cssPropName || propName}: ${propValue}` : ''
}

/**
 * Will set the `display` css rule based on the current component's props.
 *
 * @param {object} props - Component's props
 * @param {boolean} [props.inline]
 */
const setDisplay = ({ inline }) =>
  `display: ${inline ? 'inline-flex' : 'flex'};`

/**
 * Will set the `flex-wrap` css rule based on the current component's props.
 *
 * @param {object} props - Component's props
 * @param {boolean} [props.wrap]
 * @param {boolean} [props.wrapReverse]
 */
const setWrap = ({ wrap, wrapReverse }) => {
  if (wrap) {
    return 'flex-wrap: wrap;'
  } else if (wrapReverse) {
    return 'flex-wrap: wrap-reverse;'
  }

  return 'flex-wrap: nowrap;'
}

/**
 * Will set css rules for dimensions (width, height, flex-basis) based on the
 * current component's props.
 *
 * @param {object} props - Component's props
 * @param {boolean} [props.full]
 * @param {boolean} [props.fullWidth]
 * @param {boolean} [props.fullHeight]
 */
const setFull = ({ full, fullWidth, fullHeight }) => {
  if (full) {
    return `
      width: 100%;
      height: 100%;
      flex-basis: 100%;      
    `
  } else if (fullWidth) {
    return `
      width: 100%;
      flex-basis: 100%;      
    `
  } else if (fullHeight) {
    return `
      height: 100%;
      flex-basis: 100%;      
    `
  }

  return ''
}

/**
 * Will set css rules for centering (align-items, place-content) based on the
 * current component's props.
 *
 * @param {object} props - Component's props
 * @param {boolean} [props.center]
 */
const setCenter = ({ center }) =>
  center ? 'align-items: center; justify-content: center;' : ''

/**
 * Will set the `flex-direction` css rule based on the current
 * component's props.
 *
 * @param {object} props - Component's props
 * @param {boolean} [props.column]
 * @param {boolean} [props.rowReverse]
 * @param {boolean} [props.columnReverse]
 */
const setDirection = ({ column, rowReverse, columnReverse }) => {
  if (column) {
    return 'flex-direction: column;'
  } else if (rowReverse) {
    return 'flex-direction: row-reverse;'
  } else if (columnReverse) {
    return 'flex-direction: column-reverse;'
  }

  return 'flex-direction: row;'
}

const Flex = styled.div`
  ${baseStyles}
  ${(props) => setDisplay(props)}
  ${(props) => setFull(props)}
  ${(props) => setWrap(props)}
  ${(props) => setCenter(props)}
  ${(props) => setDirection(props)}
  ${(props) => setProperty(props, 'flex')};
  ${(props) => setProperty(props, 'grow', 'flex-grow')};
  ${(props) => setProperty(props, 'basis', 'flex-basis')};
  ${(props) => setProperty(props, 'shrink', 'flex-shrink')};
  ${(props) => setProperty(props, 'alignItems', 'align-items')};
  ${(props) => setProperty(props, 'alignContent', 'align-content')};
  ${(props) => setProperty(props, 'placeContent', 'place-content')};
  ${(props) => setProperty(props, 'justifyContent', 'justify-content')};
`

Flex.propTypes = {
  row: bool,
  full: bool,
  flex: oneOfType([number, string]),
  grow: bool,
  wrap: bool,
  basis: oneOfType([number, string]),
  shrink: oneOfType([number, string]),
  nowrap: bool,
  inline: bool,
  center: bool,
  column: bool,
  fullWidth: bool,
  fullHeight: bool,
  alignItems: oneOf(ALIGN_ITEMS),
  rowReverse: bool,
  wrapReverse: bool,
  alignContent: oneOf(ALIGN_CONTENT),
  placeContent: oneOf(PLACE_CONTENT),
  columnReverse: bool,
  justifyContent: oneOf(JUSTIFY_CONTENT),
}

Flex.defaultProps = {
  alignItems: FLEX_START,
  justifyContent: FLEX_START,
}

export default withSynth(Flex)
