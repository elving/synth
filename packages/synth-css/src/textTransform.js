import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `text-transform` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * textTransform({
 *   typography: {
 *     decoration: {
 *       menuLink: 'lowercase',
 *       'menuLink:hover': 'uppercase',
 *     },
 *   },
 * }, 'menuLink')
 * // => text-transform: lowercase;
 *
 * textTransform({
 *   typography: {
 *     decoration: {
 *       menuLink: 'lowercase',
 *       'menuLink:hover': 'uppercase',
 *     },
 *   },
 * }, 'menuLink:hover')
 * // => text-transform: uppercase;
 */
export const textTransform = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:transform:${name}`,
  )
}
