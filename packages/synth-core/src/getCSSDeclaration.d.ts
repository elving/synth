import { SynthTokenDeclaration } from './isTokenDeclaration'

/**
 * Returns a CSS declaration mapping to the given token.
 * @since 1.0.0
 * @example
 * getCSSDeclaration({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * }, 'color:background:button')
 * // => "background-color: red;"
 */
declare function getCSSDeclaration(
  tokens: SynthTokenDeclaration,
  tokenName: string,
): string

export default getCSSDeclaration
