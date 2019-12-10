import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `text-transform` property. If no
 * `tokenName` is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { textTransform } from '@beatgig/synth-css'
 *
 * textTransform({
 *   typography: {
 *     transform: {
 *       base: 'none',
 *       menuLink: 'lowercase',
 *     },
 *   },
 * }, 'menuLink')
 * // => text-transform: none;
 *
 * textTransform({
 *   typography: {
 *     transform: {
 *       menuLink: 'lowercase',
 *     },
 *   },
 * }, 'menuLink')
 * // => text-transform: lowercase;
 *
 * textTransform({
 *   typography: {
 *     transform: {
 *       menuLink: {
 *         default: 'lowercase',
 *         hover: 'uppercase',
 *       },
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
declare function textTransform(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default textTransform
