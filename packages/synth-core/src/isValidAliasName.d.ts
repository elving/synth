/**
 * @since 2.0.0
 * @description Validates that the given value is a valid token alias name.
 * @example
 * isValidAliasName('md') => false
 * isValidAliasName('@md') => true
 */
declare function isValidAliasName(alias: any): boolean

export default isValidAliasName
