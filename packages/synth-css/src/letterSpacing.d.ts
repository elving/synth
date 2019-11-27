import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `letter-spacing` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { letterSpacing } from '@beatgig/synth-css'
 *
 * letterSpacing({
 *   typography: {
 *     spacing: {
 *       base: 'normal',
 *       title: '2px',
 *     },
 *   },
 * })
 * // => letter-spacing: normal;
 *
 * letterSpacing({
 *   typography: {
 *     spacing: {
 *       menuLink: 'normal',
 *     },
 *   },
 * }, 'menuLink')
 * // => letter-spacing: normal;
 *
 * letterSpacing({
 *   typography: {
 *     spacing: {
 *       menuLink: {
 *         default: 'normal',
 *         disabled: '4px',
 *       },
 *     },
 *   },
 * }, 'menuLink:disabled')
 * // => letter-spacing: 4px;
 *
 * letterSpacing({
 *   global: {
 *     impactCopy: 5,
 *   },
 * }, '@impactCopy')
 * // => letter-spacing: 5px;
 */
declare function letterSpacing(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default letterSpacing
