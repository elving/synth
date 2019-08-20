import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `z-index` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { zIndex } from '@beatgig/synth-css'
 *
 * zIndex({
 *   position: {
 *     index: {
 *       card_close_button: 1,
 *       'card_close_button:hover': 5
 *     },
 *   },
 * }, 'card_close_button')
 * // => z-index: 1;
 *
 * zIndex({
 *   position: {
 *     index: {
 *       card_close_button: 1,
 *       'card_close_button:hover': 5
 *     },
 *   },
 * }, 'card_close_button:hover')
 * // => z-index: 5;
 *
 * zIndex({
 *   global: {
 *     depth: [100, 500, 1000, 5000],
 *   },
 * }, '@depth.2')
 * // => z-index: 1000;
 */
export const zIndex = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `position:index:${name}`)
}
