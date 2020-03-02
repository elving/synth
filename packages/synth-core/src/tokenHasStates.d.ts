import { SynthTokenConfiguration } from './'

/**
 * @since 2.0.0
 * @description Validates that a token has states defined given a valid token selector.
 * @example
 * tokenHasStates({
 *   color: {
 *     text: {
 *       button: {
 *         description: 'hello',
 *         value: '#232323',
 *       }
 *     }
 *   }
 * }, 'color:text:button') => false
 *
 * tokenHasStates({
 *   color: {
 *     text: {
 *       button: {
 *         hover: '#232323',
 *       }
 *     }
 *   }
 * }, 'color:text:button') => true
 */
declare function tokenHasStates(
  tokens: SynthTokenConfiguration,
  token: string,
): boolean

export default tokenHasStates
