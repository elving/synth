import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `bottom` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { bottom } from '@beatgig/synth-css'
 *
 * bottom({
 *   position: {
 *     bottom: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => bottom: 15px;
 *
 * bottom({
 *   position: {
 *     bottom: {
 *       card_close_button: '15px',
 *       'card_close_button:disabled': '25px',
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => bottom: 25px;
 *
 * bottom({
 *   global: {
 *     card: 5,
 *   },
 * }, '@card')
 * // => bottom: 5px;
 */
export const bottom = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `position:bottom:${name}`)
}
