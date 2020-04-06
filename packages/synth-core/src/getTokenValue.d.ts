import { SynthTokenConfiguration, SynthTokenValue } from './'

/**
 * @since 2.0.0
 * @description Gets the token's value given a token selector.
 * @example
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: {
 *         description: 'lorem ipsum.',
 *         release: '1.2.3',
 *         value: '#444'
 *       }
 *     }
 *   }
 * }, 'color:background:button') => '#444'
 *
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: {
 *         default: '#444',
 *         hover: '#555'
 *       }
 *     }
 *   }
 * }, 'color:background:button:hover') => '#555'
 */
declare function getTokenValue(
  tokens: SynthTokenConfiguration,
  token: string,
  transform?: () => any,
): SynthTokenValue

export default getTokenValue
