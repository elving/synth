import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `box-shadow` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { boxShadow } from '@beatgig/synth-css'
 *
 * boxShadow({
 *   style: {
 *     shadow: {
 *       base: '0 0 1px @dark',
 *     },
 *   },
 * })
 * // => box-shadow: 0 0 1px #555;
 *
 * boxShadow({
 *   style: {
 *     shadow: {
 *       textInput: '0 0 1px #333',
 *     },
 *   },
 * }, 'textInput')
 * // => box-shadow: 0 0 1px #333;
 *
 * boxShadow({
 *   style: {
 *     shadow: {
 *       textInput: {
 *         default: '0 0 1px #333',
 *         focus: '0 0 3px #333',
 *       },
 *     },
 *   },
 * }, 'textInput:focus')
 * // => box-shadow: 0 0 3px #333;
 *
 * boxShadow({
 *   global: {
 *     subtleShadow: '0 0 2px rgba(0, 0, 0, 0.15)',
 *   },
 * }, '@subtleShadow')
 * // => box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
 */
declare function boxShadow(
  tokens: SynthTokenDeclaration,
  tokenName?: string,
): string

export default boxShadow
