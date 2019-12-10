/**
 * @typedef {import('csstype').ContentPosition} END
 * @constant
 * @default
 */
export const END = 'end'

/**
 * @typedef {import('csstype').JustifyContentProperty} LEFT
 * @constant
 * @default
 */
export const LEFT = 'left'

/**
 * @typedef {import('csstype').JustifyContentProperty} RIGHT
 * @constant
 * @default
 */
export const RIGHT = 'right'

/**
 * @typedef {import('csstype').SelfPosition} START
 * @constant
 * @default
 */
export const START = 'start'

/**
 * @typedef {import('csstype').Globals} UNSET
 * @constant
 * @default
 */
export const UNSET = 'unset'

/**
 * @typedef {import('csstype').AlignItemsProperty | import('csstype').AlignContentProperty | import('csstype').PlaceContentProperty | import('csstype').JustifyContentProperty} NORMAL
 * @constant
 * @default
 */
export const NORMAL = 'normal'

/**
 * @typedef {import('csstype').ContentPosition} CENTER
 * @constant
 * @default
 */
export const CENTER = 'center'

/**
 * @typedef {import('csstype').Globals} INHERIT
 * @constant
 * @default
 */
export const INHERIT = 'inherit'

/**
 * @typedef {import('csstype').Globals} INITIAL
 * @constant
 * @default
 */
export const INITIAL = 'initial'

/**
 * @typedef {import('csstype').AlignItemsProperty | import('csstype').ContentDistribution} STRETCH
 * @constant
 * @default
 */
export const STRETCH = 'stretch'

/**
 * @typedef {import('csstype').SelfPosition | import('csstype').ContentPosition} FLEX_END
 * @constant
 * @default
 */
export const FLEX_END = 'flex-end'

/**
 * @typedef {import('csstype').SelfPosition | import('csstype').ContentPosition} SELF_END
 * @constant
 * @default
 */
export const SELF_END = 'self-end'

/**
 * @typedef {import('csstype').AlignContentProperty | import('csstype').AlignItemsProperty | import('csstype').PlaceContentProperty} BASELINE
 * @constant
 * @default
 */
export const BASELINE = 'baseline'

/**
 * @typedef {import('csstype').SelfPosition | import('csstype').ContentPosition} FLEX_START
 * @constant
 * @default
 */
export const FLEX_START = 'flex-start'

/**
 * @typedef {import('csstype').SelfPosition | import('csstype').ContentPosition} SELF_START
 * @constant
 * @default
 */
export const SELF_START = 'self-start'

/**
 * @typedef {import('csstype').ContentDistribution} SPACE_AROUND
 * @constant
 * @default
 */
export const SPACE_AROUND = 'space-around'

/**
 * @typedef {import('csstype').ContentDistribution} SPACE_EVENLY
 * @constant
 * @default
 */
export const SPACE_EVENLY = 'space-evenly'

/**
 * @typedef {import('csstype').AlignContentProperty | import('csstype').AlignItemsProperty} LAST_BASELINE
 * @constant
 * @default
 */
export const LAST_BASELINE = 'last baseline'

/**
 * @typedef {import('csstype').ContentDistribution} SPACE_BETWEEN
 * @constant
 * @default
 */
export const SPACE_BETWEEN = 'space-between'

/**
 * @typedef {import('csstype').AlignContentProperty | import('csstype').AlignItemsProperty} FIRST_BASELINE
 * @constant
 * @default
 */
export const FIRST_BASELINE = 'first baseline'

/**
 * @typedef {import('csstype').AlignItemsProperty[]} ALIGN_ITEMS
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
 * @typedef {import('csstype').AlignContentProperty[]} ALIGN_CONTENT
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
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @typedef {import('csstype').JustifyContentProperty[]} JUSTIFY_CONTENT
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
   * Global values
   */
  UNSET,
  INHERIT,
  INITIAL,
]

/**
 * @typedef {import('csstype').PlaceContentProperty[]} PLACE_CONTENT
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
  `last ${BASELINE} ${RIGHT}`,
  `first ${BASELINE} ${SPACE_EVENLY}`,

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
 * @typedef {ALIGN_ITEMS[] & ALIGN_CONTENT[] & PLACE_CONTENT[] & JUSTIFY_CONTENT[]} POSITIONAL_ALIGNMENT
 * @constant
 * @default
 */
export const POSITIONAL_ALIGNMENT = [
  ...ALIGN_ITEMS,
  ...ALIGN_CONTENT,
  ...PLACE_CONTENT,
  ...JUSTIFY_CONTENT,
]
