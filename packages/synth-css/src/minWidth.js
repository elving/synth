import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `min-width` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { minWidth } from '@beatgig/synth-css'
 *
 * minWidth({
 *   size: {
 *     minWidth: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton')
 * // => min-width: 120px;
 *
 * minWidth({
 *   size: {
 *     minWidth: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => min-width: 100%;
 *
 * minWidth({
 *   global: {
 *     cardWidth: 600,
 *   },
 * }, '@cardWidth')
 * // => min-width: 600px;
 */
export const minWidth = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:minWidth:${name}`)
}
