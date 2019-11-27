import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `height` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { height } from '@beatgig/synth-css'
 *
 * height({
 *   size: {
 *     height: {
 *       base: 'auto',
 *     },
 *   },
 * })
 * // => height: auto;
 *
 * height({
 *   size: {
 *     height: {
 *       button: '44px',
 *     },
 *   },
 * }, 'button')
 * // => height: 44px;
 *
 * height({
 *   size: {
 *     height: {
 *       button: {
 *         default: '44px',
 *         hover: '55px',
 *       },
 *     },
 *   },
 * }, 'button:hover')
 * // => height: 55px;
 *
 * height({
 *   global: {
 *     cardHeights: [200, 400, 800],
 *   },
 * }, '@cardHeights.1')
 * // => height: 400px;
 */
declare function height(tokens: SynthTokenDeclaration, tokenName?: string): string

export default height
