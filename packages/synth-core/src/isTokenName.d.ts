/**
 * Validates that the given value is a valid Synth token name.
 * @since 1.0.0
 * @example
 * isTokenName('color:text:button')
 * // => true
 *
 * isTokenName('color:text:button:hover')
 * // => true
 *
 * isTokenName('@lightGrey')
 * // => true
 *
 * isTokenName('color:text')
 * // => true
 *
 * isTokenName('hello:world:button')
 * // => false
 *
 * isTokenName('hello')
 * // => false
 */
declare function isTokenName(tokenName: string): boolean

export default isTokenName
