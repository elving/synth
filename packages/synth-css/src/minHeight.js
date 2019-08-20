import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `min-height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { minHeight } from '@beatgig/synth-css'
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
 *
 * minHeight({
 *   global: {
 *     cardMin: 200,
 *   },
 * }, '@cardMin')
 * // => min-height: 200px;
 */
export const minHeight = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:minHeight:${name}`)
}
