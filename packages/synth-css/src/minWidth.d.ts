import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `min-width` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { minWidth } from '@beatgig/synth-css'
 *
 * minWidth({
 *   size: {
 *     minWidth: {
 *       base: '100px',
 *       card: '120px',
 *     },
 *   },
 * })
 * // => min-width: 100px;
 *
 * minWidth({
 *   size: {
 *     minWidth: {
 *       card: '120px',
 *     },
 *   },
 * }, 'card')
 * // => min-width: 120px;
 *
 * minWidth({
 *   size: {
 *     minWidth: {
 *       card: {
 *         default: '120px',
 *         hover: '100%',
 *       },
 *     },
 *   },
 * }, 'card:hover')
 * // => min-width: 100%;
 *
 * minWidth({
 *   global: {
 *     cardWidth: 600,
 *   },
 * }, '@cardWidth')
 * // => min-width: 600px;
 */
declare function minWidth(tokens: SynthTokenDeclaration, tokenName?: string): string

export default minWidth
