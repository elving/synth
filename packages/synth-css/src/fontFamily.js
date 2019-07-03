import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-family` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * fontFamily({
 *   typography: {
 *     font: {
 *       text_field: 'helvetica',
 *       'text_field:disabled': 'arial',
 *     },
 *   },
 * }, 'text_field')
 * // => font-family: helvetica;
 *
 * fontFamily({
 *   typography: {
 *     font: {
 *       text_field: 'helvetica',
 *       'text_field:disabled': 'arial',
 *     },
 *   },
 * }, 'text_field:disabled')
 * // => font-family: arial;
 */
export const fontFamily = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `typography:font:${name}`,
  )
}
