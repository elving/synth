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
  const tokenValue = getTokenValue(tokens, tokenName)

  console.log(name, isGlobalToken(name))

  if (isGlobalToken(tokenName)) {
    return tokenValue
  }

  return `${getCSSProperty(`${category}:${property}`)}: ${
    TOKEN_PROPERTY_CSS_LENGTH.includes(property)
      ? unit(tokenValue)
      : Array.isArray(tokenValue)
      ? tokenValue.join(' ')
      : tokenValue
  };`
}

export default getCSSDeclaration
