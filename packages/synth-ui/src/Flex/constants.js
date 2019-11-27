/**
 * @typedef {string} END
 * @constant
 * @default
 */
export const END = 'end'

/**
 * @typedef {string} LEFT
 * @constant
 * @default
 */
export const LEFT = 'left'

/**
 * @typedef {string} LAST
 * @constant
 * @default
 */
export const LAST = 'last'

/**
 * @typedef {string} FIRST
 * @constant
 * @default
 */
export const FIRST = 'first'

/**
 * @typedef {string} RIGHT
 * @constant
 * @default
 */
export const RIGHT = 'right'

/**
 * @typedef {string} START
 * @constant
 * @default
 */
export const START = 'start'

/**
 * @typedef {string} UNSET
 * @constant
 * @default
 */
export const UNSET = 'unset'

/**
 * @typedef {string} NORMAL
 * @constant
 * @default
 */
export const NORMAL = 'normal'

/**
 * @typedef {string} CENTER
 * @constant
 * @default
 */
export const CENTER = 'center'

/**
 * @typedef {string} INHERIT
 * @constant
 * @default
 */
export const INHERIT = 'inherit'

/**
 * @typedef {string} INITIAL
 * @constant
 * @default
 */
export const INITIAL = 'initial'

/**
 * @typedef {string} STRETCH
 * @constant
 * @default
 */
export const STRETCH = 'stretch'

/**
 * @typedef {string} FLEX_END
 * @constant
 * @default
 */
export const FLEX_END = 'flex-end'

/**
 * @typedef {string} SELF_END
 * @constant
 * @default
 */
export const SELF_END = 'self-end'

/**
 * @typedef {string} BASELINE
 * @constant
 * @default
 */
export const BASELINE = 'baseline'

/**
 * @typedef {string} FLEX_START
 * @constant
 * @default
 */
export const FLEX_START = 'flex-start'

/**
 * @typedef {string} SELF_START
 * @constant
 * @default
 */
export const SELF_START = 'self-start'

/**
 * @typedef {string} SAFE_CENTER
 * @constant
 * @default
 */
export const SAFE_CENTER = 'safe center'

/**
 * @typedef {string} SPACE_AROUND
 * @constant
 * @default
 */
export const SPACE_AROUND = 'space-around'

/**
 * @typedef {string} SPACE_EVENLY
 * @constant
 * @default
 */
export const SPACE_EVENLY = 'space-evenly'

/**
 * @typedef {string} LAST_BASELINE
 * @constant
 * @default
 */
export const LAST_BASELINE = 'last baseline'

/**
 * @typedef {string} UNSAFE_CENTER
 * @constant
 * @default
 */
export const UNSAFE_CENTER = 'unsafe center'

/**
 * @typedef {string} SPACE_BETWEEN
 * @constant
 * @default
 */
export const SPACE_BETWEEN = 'space-between'

/**
 * @typedef {string} FIRST_BASELINE
 * @constant
 * @default
 */
export const FIRST_BASELINE = 'first baseline'

/**
 * @typedef {string[]} ALIGN_ITEMS
 * @constant
 * @default
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#Syntax}
 */
export const ALIGN_ITEMS = [
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
 * @typedef {string[]} ALIGN_CONTENT
 * @constant
 * @default
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Syntax}
 */
export const ALIGN_CONTENT = [
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
 * @typedef {string[]} JUSTIFY_CONTENT
 * @constant
 * @default
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Syntax}
 */
export const JUSTIFY_CONTENT = [
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
 * @typedef {string[]} PLACE_CONTENT
 * @constant
 * @default
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-content#Syntax}
 */
export const PLACE_CONTENT = [
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
 * @typedef {string[]} POSITIONAL_ALIGNMENT
 * @constant
 * @default
 */
export const POSITIONAL_ALIGNMENT = [
  ...ALIGN_ITEMS,
  ...ALIGN_CONTENT,
  ...PLACE_CONTENT,
  ...JUSTIFY_CONTENT,
]
