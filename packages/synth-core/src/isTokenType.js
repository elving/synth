import { TOKEN_CATEGORIES, TOKEN_PROPERTIES } from './constants'

/**
 * Validates that the given value is a valid Synth token type.
 *
 * @since 1.0.0
 * @param {string} tokenType
 * @returns {boolean}
 * @example
 *
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
export const isTokenType = (tokenType) => {
  if (typeof tokenType !== 'string') {
    return false
  }

  const [category, property] = tokenType.split(':')

  return (
    TOKEN_CATEGORIES.includes(category) && TOKEN_PROPERTIES.includes(property)
  )
}
