import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `letter-spacing` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { letterSpacing } from '@beatgig/synth-css'
 *
 * letterSpacing({
 *   typography: {
 *     spacing: {
 *       'menu-link': 'normal',
 *       'menu-link:disabled': '4px',
 *     },
 *   },
 * }, 'menu-link')
 * // => letter-spacing: normal;
 *
 * letterSpacing({
 *   typography: {
 *     spacing: {
 *       'menu-link': 'normal',
 *       'menu-link:disabled': '4px',
 *     },
 *   },
 * }, 'menu-link:disabled')
 * // => letter-spacing: 4px;
 *
 * letterSpacing({
 *   global: {
 *     impactCopy: 5,
 *   },
 * }, '@impactCopy')
 * // => letter-spacing: 5px;
 */
export const letterSpacing = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:spacing:${name}`)
}
