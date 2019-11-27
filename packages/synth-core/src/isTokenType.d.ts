/**
 * Validates that the given value is a valid Synth token type.
 * @since 1.0.0
 * @example
 * isTokenType('color:text')
 * // => true
 *
 * isTokenType('size:maxWidth')
 * // => true
 *
 * isTokenType('hello:world')
 * // => false
 *
 * isTokenType('hello')
 * // => false
 */
declare function isTokenType(tokenType: string): boolean

export default isTokenType
