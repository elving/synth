import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-family` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { fontFamily } from '@beatgig/synth-css'
 *
 * fontFamily({
 *   typography: {
 *     font: {
 *       base: 'arial',
 *     },
 *   },
 * })
 * // => font-family: arial;
 *
 * fontFamily({
 *   typography: {
 *     font: {
 *       text_field: 'helvetica',
 *     },
 *   },
 * }, 'text_field')
 * // => font-family: helvetica;
 *
 * fontFamily({
 *   typography: {
 *     font: {
 *       text_field: {
 *         default: 'helvetica',
 *         disabled: 'arial',
 *       },
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
declare function fontFamily(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default fontFamily
