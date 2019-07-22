import { getCSSProperty } from './getCSSProperty'
import { getTokenParts } from './getTokenParts'
import { getTokenValue } from './getTokenValue'
import { isGlobalToken } from './isGlobalToken'
import { isTokenDeclaration } from './isTokenDeclaration'
import { isTokenName } from './isTokenName'
import { TOKEN_PROPERTY_CSS_LENGTH } from './constants'
import { unit } from './unit'

/**
 * Returns a CSS declaration mapping to the given token.
 *
 * @since 1.0.0
 * @param {object} tokens - A valid Synth token declaration object.
 * @param {string} tokenName - A valid Synth token name.
 * @returns {string}
 * @example
 *
 * getCSSDeclaration({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * }, 'color:background:button')
 * // => "background-color: red;"
 */
export const getCSSDeclaration = (tokens, tokenName) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  if (!isTokenName(tokenName)) {
    throw new TypeError(
      `Invalid param "tokenName" supplied (${tokenName}), expected a valid Synth token name.`,
    )
  }

  const { category, property, name } = getTokenParts(tokenName)

  const tokenValue = getTokenValue(
    tokens,
    isGlobalToken(name) ? name : tokenName,
  )

  return `${getCSSProperty(`${category}:${property}`)}: ${
    TOKEN_PROPERTY_CSS_LENGTH.includes(property)
      ? unit(tokenValue)
      : Array.isArray(tokenValue)
      ? tokenValue.join(' ')
      : tokenValue
  };`
}
