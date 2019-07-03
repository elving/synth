import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `min-height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * minHeight({
 *   size: {
 *     minHeight: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton')
 * // => min-height: 120px;
 *
 * minHeight({
 *   size: {
 *     minHeight: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => min-height: 100%;
 */
export const minHeight = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `size:minHeight:${name}`,
  )
}
