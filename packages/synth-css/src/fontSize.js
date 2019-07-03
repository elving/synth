import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-size` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: '16px',
 *       'menu_link:disabled': '14px',
 *     },
 *   },
 * }, 'menu_link')
 * // => font-size: 16px;
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: '16px',
 *       'menu_link:disabled': '14px',
 *     },
 *   },
 * }, 'menu_link:disabled')
 * // => font-size: 14px;
 */
export const fontSize = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:size:${name}`,
  )
}
