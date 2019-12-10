/**
 * @typedef {import('@beatgig/synth-ui').PopupYPosition} POPUP_POSITION_TOP
 * @constant
 * @default
 */
export const POPUP_POSITION_TOP = 'top'

/**
 * @typedef {import('@beatgig/synth-ui').PopupXPosition} POPUP_POSITION_LEFT
 * @constant
 * @default
 */
export const POPUP_POSITION_LEFT = 'left'

/**
 * @typedef {import('@beatgig/synth-ui').PopupXPosition} POPUP_POSITION_RIGHT
 * @constant
 * @default
 */
export const POPUP_POSITION_RIGHT = 'right'

/**
 * @typedef {import('@beatgig/synth-ui').PopupXPosition | import('@beatgig/synth-ui').PopupYPosition} POPUP_POSITION_CENTER
 * @constant
 * @default
 */
export const POPUP_POSITION_CENTER = 'center'

/**
 * @typedef {import('@beatgig/synth-ui').PopupYPosition} POPUP_POSITION_BOTTOM
 * @constant
 * @default
 */
export const POPUP_POSITION_BOTTOM = 'bottom'

/**
 * @typedef {import('@beatgig/synth-ui').PopupYPosition[] & import('@beatgig/synth-ui').PopupXPosition[]} POPUP_POSITIONS
 * @constant
 * @default
 */
export const POPUP_POSITIONS = [
  POPUP_POSITION_TOP,
  POPUP_POSITION_LEFT,
  POPUP_POSITION_RIGHT,
  POPUP_POSITION_CENTER,
  POPUP_POSITION_BOTTOM,
]

/**
 * @typedef {import('@beatgig/synth-ui').PopupXPosition[]} POPUP_POSITIONS_X
 * @constant
 * @default
 */
export const POPUP_POSITIONS_X = [
  POPUP_POSITION_LEFT,
  POPUP_POSITION_RIGHT,
  POPUP_POSITION_CENTER,
]

/**
 * @typedef {import('@beatgig/synth-ui').PopupYPosition[]} POPUP_POSITIONS_Y
 * @constant
 * @default
 */
export const POPUP_POSITIONS_Y = [
  POPUP_POSITION_TOP,
  POPUP_POSITION_CENTER,
  POPUP_POSITION_BOTTOM,
]
