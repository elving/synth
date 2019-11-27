import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `z-index` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { zIndex } from '@beatgig/synth-css'
 *
 * zIndex({
 *   position: {
 *     index: {
 *       base: 5,
 *       card_close_button: 1,
 *     },
 *   },
 * })
 * // => z-index: 5;
 *
 * zIndex({
 *   position: {
 *     index: {
 *       card_close_button: 1,
 *     },
 *   },
 * }, 'card_close_button')
 * // => z-index: 1;
 *
 * zIndex({
 *   position: {
 *     index: {
 *       card_close_button: {
 *         default: 1,
 *         hover: 5
 *       },
 *     },
 *   },
 * }, 'card_close_button:hover')
 * // => z-index: 5;
 *
 * zIndex({
 *   global: {
 *     depth: [100, 500, 1000, 5000],
 *   },
 * }, '@depth.2')
 * // => z-index: 1000;
 */
declare function zIndex(tokens: SynthTokenDeclaration, tokenName?: string): string

export default zIndex
