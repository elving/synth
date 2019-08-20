import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `top` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { top } from '@beatgig/synth-css'
 *
 * top({
 *   position: {
 *     top: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => top: 15px;
 *
 * top({
 *   position: {
 *     top: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => top: 25px;
 *
 * top({
 *   global: {
 *     card: 20,
 *   },
 * }, '@card')
 * // => top: 20px;
 */
export const top = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `position:top:${name}`)
}
