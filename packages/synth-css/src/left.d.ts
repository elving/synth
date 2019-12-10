import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `left` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { left } from '@beatgig/synth-css'
 *
 * left({
 *   position: {
 *     left: {
 *       base: 'auto',
 *     },
 *   },
 * })
 * // => left: auto;
 *
 * left({
 *   position: {
 *     left: {
 *       card_close_button: '15px',
 *     },
 *   },
 * }, 'card_close_button')
 * // => left: 15px;
 *
 * left({
 *   position: {
 *     left: {
 *       card_close_button: {
 *         default: '15px',
 *         disabled: '25px',
 *       },
 *     },
 *   },
 * }, 'card_close_button:disabled')
 * // => left: 25px;
 *
 * left({
 *   global: {
 *     card: 10,
 *   },
 * }, '@card')
 * // => left: 10px;
 */
declare function left(tokens: SynthTokenDeclaration, tokenName?: string): string

export default left
