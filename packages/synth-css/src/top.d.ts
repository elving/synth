import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `top` property. If no `tokenName` is given,
 * the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { top } from '@beatgig/synth-css'
 *
 * top({
 *   position: {
 *     top: {
 *       base: 'auto',
 *       card_close_button: '15px',
 *     },
 *   },
 * })
 * // => top: auto;
 *
 * top({
 *   position: {
 *     top: {
 *       card_close_button: '15px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => top: 15px;
 *
 * top({
 *   position: {
 *     top: {
 *       card_close_button: {
 *         default: '15px',
 *         disabled: '25px',
 *       },
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => top: 25px;
 *
 * top({
 *   global: {
 *     card: 20,
 *   },
 * }, '@card')
 * // => top: 20px;
 */
declare function top(tokens: SynthTokenDeclaration, tokenName?: string): string

export default top
