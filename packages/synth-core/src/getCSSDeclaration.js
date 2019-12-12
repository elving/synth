import { isNumeric } from '@beatgig/is'

import getCSSProperty from './getCSSProperty'
import getTokenParts from './getTokenParts'
import getTokenValue from './getTokenValue'
import isGlobalToken from './isGlobalToken'
import isTokenDeclaration from './isTokenDeclaration'
import isTokenName from './isTokenName'
import unit from './unit'
import { TOKEN_PROPERTY_CSS_LENGTH } from './constants'

const getCSSDeclaration = (tokens, tokenName) => {
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

  if (isGlobalToken(tokenName)) {
    return tokenValue
  }

  return `${getCSSProperty(`${category}:${property}`)}: ${
    TOKEN_PROPERTY_CSS_LENGTH.includes(
      property,
    ) /** if property supports a CSS length */
      ? unit(
          tokenValue || tokenValue === 0 ? tokenValue : name,
        ) /** return token value as CSS length unit */
      : Array.isArray(tokenValue) /** if token value is an array */
      ? tokenValue.join(' ') /** return token value array as a string */
      : tokenValue /** if there is a valid token value */
      ? tokenValue /** return valid token value */
      : name /** return the token `name` as a last measure */
  };`
}

export default getCSSDeclaration
