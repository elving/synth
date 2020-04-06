import * as SynthCore from '@beatgig/synth-core'

/**
 * @since 2.0.0
 * @description Gets the given token's value transforming numeric values to pixel units by default.
 * @example
 * getTokenValue({
 *   space: {
 *     padding: {
 *       button: {
 *         description: 'lorem ipsum.',
 *         release: '1.2.3',
 *         value: 8
 *       }
 *     }
 *   }
 * }, 'space:padding:button') => '8px'
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
  tokens: SynthCore.SynthTokenConfiguration,
  token: string,
  transform?: () => any,
): SynthCore.SynthTokenValue

export default getTokenValue
