import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `right` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * right({
 *   position: {
 *     right: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px'
 *     },
 *   },
 * }, 'card_close_button')
 * // => right: 15px;
 *
 * right({
 *   position: {
 *     right: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px'
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => right: 25px;
 *
 * right({
 *   global: {
 *     card: 10,
 * }, '@card')
 * // => right: 10px;
 */
export const right = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `position:right:${name}`)
}
