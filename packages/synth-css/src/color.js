import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `color` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * color({
 *   color: {
 *     text: {
 *       caption: '#333',
 *       'caption:hover': '#555',
 *     },
 *   },
 * }, 'caption')
 * // => color: #333;
 *
 * color({
 *   color: {
 *     text: {
 *       caption: '#333',
 *       'caption:hover': '#555',
 *     },
 *   },
 * }, 'caption:hover')
 * // => color: #555;
 */
export const color = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `color:text:${name}`,
  )
}
