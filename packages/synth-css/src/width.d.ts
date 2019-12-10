import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `width` property. If no `tokenName` is given,
 * the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { width } from '@beatgig/synth-css'
 *
 * width({
 *   size: {
 *     width: {
 *       base: '100%',
 *       primaryButton: '120px',
 *     },
 *   },
 * }, 'primaryButton')
 * // => width: 100%;
 *
 * width({
 *   size: {
 *     width: {
 *       primaryButton: '120px',
 *     },
 *   },
 * }, 'primaryButton')
 * // => width: 120px;
 *
 * width({
 *   size: {
 *     width: {
 *       primaryButton: {
 *         default: '120px',
 *         hover: '100%',
 *       },
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => width: 100%;
 *
 * width({
 *   global: {
 *     contentWidths: [300, 600, 900],
 *   },
 * }, '@contentWidths.1')
 * // => width: 600px;
 */
declare function width(tokens: SynthTokenDeclaration, tokenName?: string): string

export default width
