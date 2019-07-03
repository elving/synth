import { isTokenType } from './isTokenType'
import { TOKEN_CATEGORIES, TOKEN_PROPERTIES } from './constants'

/**
 * Validates that the given value is a valid Synth token name.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {boolean}
 * @example
 *
 * isTokenName('color:text:button')
 * // => true
 *
 * isTokenName('@lightGrey')
 * // => true
 *
 * isTokenType('hello:world:button')
 * // => false
 *
 * isTokenType('hello')
 * // => false
 */
export const isTokenName = (tokenName) => {
  if (typeof tokenName !== 'string') {
    return false
  }

  if (tokenName.startsWith('@')) {
    return true
  }

  if (!isTokenType(tokenName)) {
    return false
  }

  const [category, property, name] = tokenName.split(':')

  return name != undefined
}
