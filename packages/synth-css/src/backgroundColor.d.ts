import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `background-color` property. If no
 * `tokenName` is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { backgroundColor } from '@beatgig/synth-css'
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: '#333',
 *     },
 *   },
 * }, 'primaryButton')
 * // => background-color: #333;
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       base: '#111',
 *     },
 *   },
 * })
 * // => background-color: #111;
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: {
 *         default: '#333',
 *         hover: '#111',
 *       },
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => background-color: #111;
 *
 * backgroundColor({
 *   global: {
 *     universe: '#434343',
 *   },
 * }, '@universe')
 * // => background-color: #434343;
 */
declare function backgroundColor(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default backgroundColor
