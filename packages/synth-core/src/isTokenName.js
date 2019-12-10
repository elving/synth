import { isString } from '@beatgig/is'

import isGlobalToken from './isGlobalToken'
import isTokenType from './isTokenType'

const isTokenName = (tokenName) => {
  if (!isString(tokenName)) {
    return false
  }

  if (isGlobalToken(tokenName)) {
    return true
  }

  if (!isTokenType(tokenName)) {
    return false
  }

  return true
}

export default isTokenName
