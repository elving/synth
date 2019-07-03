import { getCSSProperty } from './getCSSProperty'
import { getTokenParts } from './getTokenParts'
import { getTokenValue } from './getTokenValue'
import { isTokenName } from './isTokenName'
import { isTokenDeclaration } from './isTokenDeclaration'

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
      'Invalid param `tokenName` supplied, expected a valid Synth token name.',
    )
  }

  const { category, property } = getTokenParts(tokenName)

  return `${getCSSProperty(`${category}:${property}`)}: ${getTokenValue(
    tokens,
    tokenName,
  )};`
}
