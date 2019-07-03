import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `line-height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       'menu_link': 1.5,
 *       'menu_link:disabled': 1.65,
 *     },
 *   },
 * }, 'menu_link')
 * // => line-height: 1.5;
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       'menu_link': 1.5,
 *       'menu_link:disabled': 1.65,
 *     },
 *   },
 * }, 'menu_link:disabled')
 * // => line-height: 1.65;
 */
export const lineHeight = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:lineHeight:${name}`,
  )
}
