import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-weight` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * import { fontWeight } from '@beatgig/synth-css'
 *
 * fontWeight({
 *   typography: {
 *     weight: {
 *       'menu-link': '300',
 *       'menu-link:hover': '600',
 *     },
 *   },
 * }, 'menu-link')
 * // => font-weight: 300;
 *
 * fontWeight({
 *   typography: {
 *     weight: {
 *       'menu-link': '300',
 *       'menu-link:hover': '600',
 *     },
 *   },
 * }, 'menu-link:hover')
 * // => font-weight: 600;
 */
export const fontWeight = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:weight:${name}`,
  )
}
