import { SynthTokenConfiguration } from './'

/**
 * @since 2.0.0
 * @description Validates that a token has metadata defined given a valid token selector.
 * @example
 * tokenHasMetadata({
 *   color: {
 *     text: {
 *       button: {
 *         description: 'hello',
 *         value: '#232323',
 *       }
 *     }
 *   }
 * }, 'color:text:button') => true
 *
 * tokenHasMetadata({
 *   color: {
 *     text: {
 *       button: '#232323'
 *     }
 *   }
 * }, 'color:text:button') => false
 */
declare function tokenHasMetadata(
  tokens: SynthTokenConfiguration,
  token: string,
): boolean

export default tokenHasMetadata
