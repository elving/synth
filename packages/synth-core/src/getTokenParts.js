import isGlobalToken from './isGlobalToken'
import isTokenName from './isTokenName'
import { TOKEN_CATEGORY_GLOBAL } from './constants'

const getTokenParts = (tokenName) => {
  if (!isTokenName(tokenName)) {
    throw new TypeError(
      `Invalid param "tokenName" supplied (${tokenName}), expected a valid Synth token name.`,
    )
  }

  if (isGlobalToken(tokenName)) {
    return {
      category: TOKEN_CATEGORY_GLOBAL,
      modifier: 'default',
      name: tokenName.replace('@', ''),
      property: '',
    }
  }

  const [category, property, name, modifier = 'default'] = tokenName.split(':')

  return {
    category,
    modifier,
    name,
    property,
  }
}

export default getTokenParts
