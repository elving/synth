import get from 'lodash.get'

import { isTokenName } from './isTokenName'
import { getTokenParts } from './getTokenParts'
import { isTokenDeclaration } from './isTokenDeclaration'

/**
 * Returns a the value of the given token declaration.
 *
 * @since 1.0.0
 * @param {object} tokens - A valid Synth token declaration object.
 * @param {string} tokenName - A valid Synth token name.
 * @returns {string}
 * @example
 *
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * }, 'color:background:button')
 * // => "red"
 */
export const getTokenValue = (tokens, tokenName) => {
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

  if (tokens[tokenName]) {
    return tokens[tokenName]
  }

  const { category, name, property } = getTokenParts(tokenName)
  const tokenValue = get(tokens, `${category}.${property}.${name}`)

  if (!tokenValue) {
    return ''
  }

  return typeof tokenValue === 'string' && tokenValue.startsWith('@')
    ? getTokenValue(tokens, tokenValue)
    : tokenValue
}
