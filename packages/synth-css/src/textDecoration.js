import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `text-decoration` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * textDecoration({
 *   typography: {
 *     decoration: {
 *       menu_link: 'none',
 *       'menu_link:hover': 'underline',
 *     },
 *   },
 * }, 'menu_link')
 * // => text-decoration: none;
 *
 * textDecoration({
 *   typography: {
 *     decoration: {
 *       menu_link: 'none',
 *       'menu_link:hover': 'underline',
 *     },
 *   },
 * }, 'menu_link:hover')
 * // => text-decoration: underline;
 */
export const textDecoration = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:decoration:${name}`,
  )
}
