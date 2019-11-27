import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `opacity` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { opacity } from '@beatgig/synth-css'
 *
 * opacity({
 *   style: {
 *     opacity: {
 *       base: 1,
 *       form_button: 0.8,
 *     },
 *   },
 * })
 * // => opacity: 1;
 *
 * opacity({
 *   style: {
 *     opacity: {
 *       form_button: 0.8,
 *     },
 *   },
 * }, 'form_button')
 * // => opacity: 0.8;
 *
 * opacity({
 *   style: {
 *     opacity: {
 *       form_button: {
 *         default: 1,
 *         disabled: 0.5,
 *       },
 *     },
 *   },
 * }, 'form_button:disabled')
 * // => opacity: 0.5;
 *
 * opacity({
 *   global: {
 *     disabled: 0.35,
 *   },
 * }, '@disabled')
 * // => opacity: 0.35;
 */
declare function opacity(tokens: SynthTokenDeclaration, tokenName?: string): string

export default opacity
