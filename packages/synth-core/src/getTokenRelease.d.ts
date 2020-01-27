import { SynthTokenConfiguration } from './'

/**
 * @since 2.0.0
 * @description Gets the given token's release value from it's metadata.
 * @example
 * getTokenRelease({
 *   color: {
 *     background: {
 *       button: {
 *         description: 'lorem ipsum.',
 *         release: '1.2.3',
 *         value: '#444'
 *       }
 *     }
 *   }
 * }, 'color:background:button') => '1.2.3'
 */
declare function getTokenRelease(
  tokens: SynthTokenConfiguration,
  token: string,
): string

export default getTokenRelease
