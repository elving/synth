import { SynthTokenConfiguration, SynthTokenContent } from './'

/**
 * @since 2.0.0
 * @description Gets the given token's contents.
 * @example
 * getToken({
 *   color: {
 *     background: {
 *       button: '#444'
 *     }
 *   }
 * }, 'color:background:button') => '#444'
 *
 * getToken({
 *   color: {
 *     background: {
 *       button: {
 *         hover: '#444'
 *       }
 *     }
 *   }
 * }, 'color:background:button') => { hover: '#444' }
 *
 * getToken({
 *   color: {
 *     background: {
 *       button: {
 *         description: 'lorem ipsum.'
 *         value: '#444'
 *       }
 *     }
 *   }
 * }, 'color:background:button') => { description: 'lorem ipsum.', value: '#444' }
 */
declare function getToken(
  tokens: SynthTokenConfiguration,
  token: string,
  ignoreState?: boolean,
): SynthTokenContent

export default getToken
