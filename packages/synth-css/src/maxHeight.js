import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `max-height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { maxHeight } from '@beatgig/synth-css'
 *
 * maxHeight({
 *   size: {
 *     maxHeight: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton')
 * // => max-height: 120px;
 *
 * maxHeight({
 *   size: {
 *     maxHeight: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => max-height: 100%;
 *
 * maxHeight({
 *   global: {
 *     cardHeight: '60%',
 *   },
 * }, '@cardHeight')
 * // => max-height: 60%;
 */
export const maxHeight = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:maxHeight:${name}`)
}
