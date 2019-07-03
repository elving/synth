import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `z-index` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
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
 */
export const zIndex = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `position:index:${name}`,
  )
}
