import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { height } from '@beatgig/synth-css'
 *
 * height({
 *   size: {
 *     height: {
 *       button: '100%',
 *       'button:hover': '120%',
 *     },
 *   },
 * }, 'button')
 * // => height: 100%;
 *
 * height({
 *   size: {
 *     height: {
 *       button: '100%',
 *       'button:hover': '120%',
 *     },
 *   },
 * }, 'button:hover')
 * // => height: 120%;
 *
 * height({
 *   global: {
 *     cardHeights: [200, 400, 800],
 *   },
 * }, '@cardHeights.1')
 * // => height: 400px;
 */
export const height = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:height:${name}`)
}
