/**
 * Validates that the given value is a valid Synth global token name.
 * @since 1.0.0
 * @example
 * isGlobalToken('@helloWorld')
 * // => true
 *
 * isGlobalToken('color:text:button:hover')
 * // => false
 *
 * isGlobalToken('hello')
 * // => false
 */
declare function isGlobalToken(tokenName: string): boolean

export default isGlobalToken
