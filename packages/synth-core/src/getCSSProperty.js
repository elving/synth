import isTokenType from './isTokenType'
import { TOKEN_PROPERTY_CSS_MAP } from './constants'

const getCSSProperty = (tokenType) => {
  if (!isTokenType(tokenType)) {
    throw new TypeError(
      'Invalid param `tokenType` supplied, expected a valid Synth token type.',
    )
  }

  return TOKEN_PROPERTY_CSS_MAP[tokenType]
}

export default getCSSProperty
