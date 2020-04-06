/**
 * @since 2.0.0
 * @description Used to throw an error when passing an invalid token configuration.
 */
declare function throwTokenConfigError(value?: any)

/**
 * @since 2.0.0
 * @description Used to throw an error when passing an invalid token.
 */
declare function throwTokenError(value?: any)

/**
 * @since 2.0.0
 * @description Used to throw an error when passing an invalid token category.
 */
declare function throwCategoryError(value?: any)

/**
 * @since 2.0.0
 * @description Used to throw an error when passing an invalid token alias.
 */
declare function throwAliasError(value?: any)

export {
  throwAliasError,
  throwCategoryError,
  throwTokenConfigError,
  throwTokenError,
}
