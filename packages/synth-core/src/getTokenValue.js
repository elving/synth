import get from 'lodash.get'
import { isString } from '@beatgig/is'

import getTokenParts from './getTokenParts'
import isGlobalToken from './isGlobalToken'
import isTokenDeclaration from './isTokenDeclaration'
import isTokenName from './isTokenName'
import { TOKEN_CATEGORY_GLOBAL } from './constants'

/**
 * Returns a the value of the given token declaration.
 * @since 1.0.0
 * @example
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * }, 'color:background:button')
 * // => "red"
 *
 * getTokenValue({
 *   color: {
 *     background: {
 *       button: {
 *         default: '#ddd',
 *         disabled: '#eee',
 *       },
 *     },
 *   },
 * }, 'color:background:button:disabled')
 * // => "#eee"
 *
 * getTokenValue({
 *   global: {
 *     fontSizes: [14, 16, 18, 22],
 *   },
 * }, '@fontSizes')
 * // => 14
 *
 * getTokenValue({
 *   global: {
 *     fontSizes: [14, 16, 18, 22],
 *   },
 * }, '@fontSizes.2')
 * // => 18
 */
const getTokenValue = (tokens, tokenName) => {
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

  if (isGlobalToken(tokenName)) {
    const index = Number.parseInt(tokenName.split('.').pop(), 10)

    const value = get(
      tokens,
      `${TOKEN_CATEGORY_GLOBAL}.${tokenName.replace('@', '')}`,
    )

    if (value) {
      if (Array.isArray(value)) {
        return value[index] || value[0]
      }

      return value
    }

    return ''
  }

  const { category, modifier, name, property } = getTokenParts(tokenName)
  const tokenPath = `${category}.${property}.${name}`
  const tokenPathModifier = `${tokenPath}.${modifier}`
  const tokenValue = get(tokens, tokenPathModifier, get(tokens, tokenPath))

  if (tokenValue == undefined) {
    return ''
  }

  const canSplit = isString(tokenValue) && /\s/.test(tokenValue)

  if (canSplit || Array.isArray(tokenValue)) {
    const valueToMap = canSplit ? tokenValue.split(/\s/) : tokenValue

    return valueToMap
      .map((value) =>
        isTokenName(value) ? getTokenValue(tokens, value) : value,
      )
      .join(' ')
  }

  return isGlobalToken(tokenValue)
    ? getTokenValue(tokens, tokenValue)
    : tokenValue
}

export default getTokenValue
