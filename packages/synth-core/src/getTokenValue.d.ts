import { SynthTokenDeclaration } from './isTokenDeclaration'

/**
 * Returns a the value of the given token declaration.
 * @since 1.0.0
 * @example
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * }, 'color:background:button')
 * // => "red"
 *
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: {
 *         default: '#ddd',
 *         disabled: '#eee',
 *       },
 *     },
 *   },
 * }, 'color:background:button:disabled')
 * // => "#eee"
 *
 * getTokenValue({
 *   global: {
 *     fontSizes: [14, 16, 18, 22],
 *   },
 * }, '@fontSizes')
 * // => 14
 *
 * getTokenValue({
 *   global: {
 *     fontSizes: [14, 16, 18, 22],
 *   },
 * }, '@fontSizes.2')
 * // => 18
 */
declare function getTokenValue(
  tokens: SynthTokenDeclaration,
  tokenName: string,
): string

export default getTokenValue
