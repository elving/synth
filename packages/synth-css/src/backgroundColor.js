import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `background-color` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: '#333',
 *     },
 *   },
 * }, 'primaryButton')
 * // => background-color: #333;
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: '#333',
 *       'primaryButton:hover': '#111',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => background-color: #111;
 */
export const backgroundColor = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `color:background:${name}`,
  )
}
