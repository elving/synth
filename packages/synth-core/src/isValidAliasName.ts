/**
 * @since 2.0.0
 * @description Validates the given value is a valid alias name.
 * @example
 * isValidAliasName('md') => false
 * isValidAliasName('@md') => true
 */
declare function isValidAliasName(alias: any): boolean

export default isValidAliasName
