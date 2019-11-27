import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `right` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { right } from '@beatgig/synth-css'
 *
 * right({
 *   position: {
 *     right: {
 *       base: 'auto',
 *       card_close_button: '15px',
 *     },
 *   },
 * })
 * // => right: auto;
 *
 * right({
 *   position: {
 *     right: {
 *       card_close_button: '15px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => right: 15px;
 *
 * right({
 *   position: {
 *     right: {
 *       card_close_button: {
 *         default: '15px',
 *         disabled: '25px',
 *       },
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => right: 25px;
 *
 * right({
 *   global: {
 *     card: 10,
 * }, '@card')
 * // => right: 10px;
 */
declare function right(tokens: SynthTokenDeclaration, tokenName?: string): string

export default right
