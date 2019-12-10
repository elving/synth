import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `max-width` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { maxWidth } from '@beatgig/synth-css'
 *
 * maxWidth({
 *   size: {
 *     maxWidth: {
 *       base: '100px',
 *       primaryButton: '120px',
 *     },
 *   },
 * })
 * // => max-width: 100px;
 *
 * maxWidth({
 *   size: {
 *     maxWidth: {
 *       primaryButton: '120px',
 *     },
 *   },
 * }, 'primaryButton')
 * // => max-width: 120px;
 *
 * maxWidth({
 *   size: {
 *     maxWidth: {
 *       primaryButton: {
 *         default: '120px',
 *         hover: '100%',
 *       },
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => max-width: 100%;
 *
 * maxWidth({
 *   global: {
 *     contentWidth: 1024,
 *   },
 * }, '@contentWidth')
 * // => max-width: 1024px;
 */
declare function maxWidth(tokens: SynthTokenDeclaration, tokenName?: string): string

export default maxWidth
