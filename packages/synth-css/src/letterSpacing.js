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
 * @param {string} name
 * @returns {string}
 * @example
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
 */
export const letterSpacing = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:spacing:${name}`,
  )
}
