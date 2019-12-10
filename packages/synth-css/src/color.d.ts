import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `color` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { color } from '@beatgig/synth-css'
 *
 * color({
 *   color: {
 *     text: {
 *       base: '#444',
 *     },
 *   },
 * })
 * // => color: #444;
 *
 * color({
 *   color: {
 *     text: {
 *       caption: '#333',
 *     },
 *   },
 * }, 'caption')
 * // => color: #333;
 *
 * color({
 *   color: {
 *     text: {
 *       caption: {
 *         default: '#333',
 *         hover: '#555',
 *       },
 *     },
 *   },
 * }, 'caption:hover')
 * // => color: #555;
 *
 * color({
 *   global: {
 *     copyColorScale: ['#333', '#444', '#555'],
 *   },
 * }, '@copy.2')
 * // => color: #555;
 */
declare function color(tokens: SynthTokenDeclaration, tokenName?: string): string

export default color
