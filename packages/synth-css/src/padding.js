import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `padding` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { padding } from '@beatgig/synth-css'
 *
 * padding({
 *   space: {
 *     padding: {
 *       'primaryButton': '10px 15px',
 *       'primaryButton:hover': '15%'
 *     },
 *   },
 * }, 'primaryButton')
 * // => padding: 10px 15px;
 *
 * padding({
 *   space: {
 *     padding: {
 *       'primaryButton': '10px 15px',
 *       'primaryButton:hover': '15%'
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => padding: 15%;
 *
 * padding({
 *   global: {
 *     spacing: [10, 12, 14, 16],
 *   },
 * }, '@spacing')
 * // => padding: 10px;
 */
export const padding = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `space:padding:${name}`)
}
