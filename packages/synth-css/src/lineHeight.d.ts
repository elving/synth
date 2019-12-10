import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `line-height` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { lineHeight } from '@beatgig/synth-css'
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       base: 1.5,
 *       heading: 1.8
 *     },
 *   },
 * })
 * // => line-height: 1.5;
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       heading: 1.8,
 *     },
 *   },
 * }, 'heading')
 * // => line-height: 1.8;
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       heading: {
 *         default: 1.5,
 *         disabled: 1.65,
 *       },
 *     },
 *   },
 * }, 'heading:disabled')
 * // => line-height: 1.65;
 *
 * lineHeight({
 *   global: {
 *     headingLine: 1.8,
 *   },
 * }, '@headingLine')
 * // => line-height: 1.8;
 */
declare function lineHeight(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default lineHeight
