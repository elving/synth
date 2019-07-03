import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `left` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * left({
 *   position: {
 *     left: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => left: 15px;
 *
 * left({
 *   position: {
 *     left: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => left: 25px;
 */
export const left = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `position:left:${name}`,
  )
}
