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
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { color } from '@beatgig/synth-css'
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
 *
 * color({
 *   global: {
 *     copyColorScale: ['#333', '#444', '#555'],
 *   },
 * }, '@copy.2')
 * // => color: #555;
 */
export const color = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `color:text:${name}`)
}
