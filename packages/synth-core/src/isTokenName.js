import { isGlobalToken } from './isGlobalToken'
import { isTokenType } from './isTokenType'

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
 * isTokenName('color:text:button:hover')
 * // => true
 *
 * isTokenName('@lightGrey')
 * // => true
 *
 * isTokenName('hello:world:button')
 * // => false
 *
 * isTokenName('hello')
 * // => false
 */
export const isTokenName = (tokenName) => {
  if (typeof tokenName !== 'string') {
    return false
  }

  if (isGlobalToken(tokenName)) {
    return true
  }

  if (!isTokenType(tokenName)) {
    return false
  }

  const [category, property, name] = tokenName.split(':')

  return name != undefined
}
