import { SynthTokenConfiguration } from './'

/**
 * @since 2.0.0
 * @description Gets the a token's description value from it's metadata given a token selector.
 * @example
 * getTokenDescription({
 *   color: {
 *     background: {
 *       button: {
 *         description: 'lorem ipsum.',
 *         value: '#444'
 *       }
 *     }
 *   }
 * }, 'color:background:button') => 'lorem ipsum.'
 */
declare function getTokenDescription(
  tokens: SynthTokenConfiguration,
  token: string,
): string

export default getTokenDescription
