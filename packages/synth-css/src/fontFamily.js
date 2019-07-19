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
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { fontFamily } from '@beatgig/synth-css'
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
 *
 * fontFamily({
 *   global: {
 *     bodyFont: 'helvetica',
 *   },
 * }, '@bodyFont')
 * // => font-family: helvetica;
 */
export const fontFamily = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:font:${name}`)
}
