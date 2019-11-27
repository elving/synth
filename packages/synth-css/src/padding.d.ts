import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `padding` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { padding } from '@beatgig/synth-css'
 *
 * padding({
 *   space: {
 *     padding: {
 *       base: 12,
 *       primaryButton: '10px 15px',
 *     },
 *   },
 * })
 * // => padding: 12px;
 *
 * padding({
 *   space: {
 *     padding: {
 *       primaryButton: {
 *         default: '10px 15px',
 *         hover: '15%',
 *       },
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => padding: 15%;
 *
 * padding({
 *   global: {
 *     spacing: [10, 12, 14, 16],
 *   },
 * }, '@spacing')
 * // => padding: 10px;
 */
declare function padding(tokens: SynthTokenDeclaration, tokenName?: string): string

export default padding
