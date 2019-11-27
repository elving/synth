import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-weight` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { fontWeight } from '@beatgig/synth-css'
 *
 * fontWeight({
 *   typography: {
 *     weight: {
 *       base: '400',
 *     },
 *   },
 * })
 * // => font-weight: 400;
 *
 * fontWeight({
 *   typography: {
 *     weight: {
 *       menuLink: '300',
 *     },
 *   },
 * }, 'menuLink')
 * // => font-weight: 300;
 *
 * fontWeight({
 *   typography: {
 *     weight: {
 *       menuLink: {
 *         default: '300',
 *         hover: '600',
 *       },
 *     },
 *   },
 * }, 'menuLink:hover')
 * // => font-weight: 600;
 *
 * fontWeight({
 *   global: {
 *     bold: 800,
 *   },
 * }, '@bold')
 * // => font-weight: 800;
 */
declare function fontWeight(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default fontWeight
