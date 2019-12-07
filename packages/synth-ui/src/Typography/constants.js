/**
 * @typedef {import('@beatgig/synth-ui').TextIntent} INTENT_NONE
 * @constant
 * @default
 */
export const INTENT_NONE = 'none'

/**
 * @typedef {import('@beatgig/synth-ui').TextIntent} INTENT_DANGER
 * @constant
 * @default
 */
export const INTENT_DANGER = 'danger'

/**
 * @typedef {import('@beatgig/synth-ui').TextIntent} INTENT_SUCCESS
 * @constant
 * @default
 */
export const INTENT_SUCCESS = 'success'

/**
 * @typedef {import('@beatgig/synth-ui').TextIntent} INTENT_HIGHLIGHT
 * @constant
 * @default
 */
export const INTENT_HIGHLIGHT = 'highlight'

/**
 * @typedef {import('@beatgig/synth-ui').TextIntent[]} INTENTS
 * @constant
 * @default
 */
export const INTENTS = [
  INTENT_NONE,
  INTENT_DANGER,
  INTENT_SUCCESS,
  INTENT_HIGHLIGHT,
]
