import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `max-height` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { maxHeight } from '@beatgig/synth-css'
 *
 * maxHeight({
 *   size: {
 *     maxHeight: {
 *       base: '120px',
 *     },
 *   },
 * })
 * // => max-height: 120px;
 *
 * maxHeight({
 *   size: {
 *     maxHeight: {
 *       tooltip: '130px',
 *     },
 *   },
 * }, 'tooltip')
 * // => max-height: 130px;
 *
 * maxHeight({
 *   size: {
 *     maxHeight: {
 *       tooltip: {
 *         default: '120px',
 *         hover: '100%',
 *       },
 *     },
 *   },
 * }, 'tooltip:hover')
 * // => max-height: 100%;
 *
 * maxHeight({
 *   global: {
 *     cardHeight: '60%',
 *   },
 * }, '@cardHeight')
 * // => max-height: 60%;
 */
declare function maxHeight(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default maxHeight
