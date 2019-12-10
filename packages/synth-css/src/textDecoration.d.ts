import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `text-decoration` property. If no
 * `tokenName` is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { textDecoration } from '@beatgig/synth-css'
 *
 * textDecoration({
 *   typography: {
 *     decoration: {
 *       base: 'underline',
 *       menu_link: 'none',
 *     },
 *   },
 * })
 * // => text-decoration: underline;
 *
 * textDecoration({
 *   typography: {
 *     decoration: {
 *       menu_link: 'none',
 *     },
 *   },
 * }, 'menu_link')
 * // => text-decoration: none;
 *
 * textDecoration({
 *   typography: {
 *     decoration: {
 *       menu_link: {
 *         default: 'none',
 *         hover: 'underline',
 *       },
 *     },
 *   },
 * }, 'menu_link:hover')
 * // => text-decoration: underline;
 *
 * textDecoration({
 *   global: {
 *     linkStyle: 'underline',
 *   },
 * }, '@linkStyle')
 * // => text-decoration: underline;
 */
declare function textDecoration(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default textDecoration
