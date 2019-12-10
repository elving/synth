import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `min-height` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { minHeight } from '@beatgig/synth-css'
 *
 * minHeight({
 *   size: {
 *     minHeight: {
 *       base: 'auto',
 *       primaryButton: '120px',
 *     },
 *   },
 * })
 * // => min-height: auto;
 *
 * minHeight({
 *   size: {
 *     minHeight: {
 *       primaryButton: '120px',
 *     },
 *   },
 * }, 'primaryButton')
 * // => min-height: 120px;
 *
 * minHeight({
 *   size: {
 *     minHeight: {
 *       primaryButton: {
 *         default: '120px',
 *         hover: '100%',
 *       },
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => min-height: 100%;
 *
 * minHeight({
 *   global: {
 *     cardMin: 200,
 *   },
 * }, '@cardMin')
 * // => min-height: 200px;
 */
declare function minHeight(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default minHeight
