import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `border-radius` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { borderRadius } from '@beatgig/synth-css'
 *
 * borderRadius({
 *   size: {
 *     radius: {
 *       base: '2px',
 *       primaryButton: '5px',
 *     },
 *   },
 * })
 * // => border-radius: 2px;
 *
 * borderRadius({
 *   size: {
 *     radius: {
 *       primaryButton: '5px',
 *     },
 *   },
 * }, 'primaryButton')
 * // => border-radius: 5px;
 *
 * borderRadius({
 *   size: {
 *     radius: {
 *       primaryButton: {
 *         default: '5px',
 *         disabled: '0px',
 *       },
 *     },
 *   },
 * }, 'primaryButton:disabled')
 * // => border-radius: 0px;
 *
 * borderRadius({
 *   global: {
 *     circle: '50%',
 *   },
 * }, '@circle')
 * // => border-radius: 50%;
 */
declare function borderRadius(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default borderRadius
