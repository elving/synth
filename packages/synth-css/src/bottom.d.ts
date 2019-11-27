import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `bottom` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { bottom } from '@beatgig/synth-css'
 *
 * bottom({
 *   position: {
 *     bottom: {
 *       default: '5px',
 *       card_close_button: '15px',
 *     },
 *   },
 * })
 * // => bottom: 5px;
 *
 * bottom({
 *   position: {
 *     bottom: {
 *       card_close_button: '15px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => bottom: 15px;
 *
 * bottom({
 *   position: {
 *     bottom: {
 *       card_close_button: {
 *         default: '15px',
 *         disabled: '25px',
 *       },
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => bottom: 25px;
 *
 * bottom({
 *   global: {
 *     card: 5,
 *   },
 * }, '@card')
 * // => bottom: 5px;
 */
declare function bottom(tokens: SynthTokenDeclaration, tokenName?: string): string

export default bottom
