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
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { textTransform } from '@beatgig/synth-css'
 *
 * textTransform({
 *   typography: {
 *     transform: {
 *       menuLink: 'lowercase',
 *       'menuLink:hover': 'uppercase',
 *     },
 *   },
 * }, 'menuLink')
 * // => text-transform: lowercase;
 *
 * textTransform({
 *   typography: {
 *     transform: {
 *       menuLink: 'lowercase',
 *       'menuLink:hover': 'uppercase',
 *     },
 *   },
 * }, 'menuLink:hover')
 * // => text-transform: uppercase;
 *
 * textTransform({
 *   global: {
 *     headingStyle: 'uppercase',
 *   },
 * }, '@headingStyle')
 * // => text-transform: uppercase;
 */
export const textTransform = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:transform:${name}`)
}
