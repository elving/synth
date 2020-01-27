/**
 * @since 2.0.0
 * @description Validates the given value to see if it's a valid Synth token.
 * @example
 * isValidToken('color:background:button') => true
 * isValidToken('nope:background:button') => false
 */
declare function isValidToken(token: string): boolean

export default isValidToken
