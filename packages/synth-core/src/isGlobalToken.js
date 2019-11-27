import { isString } from '@beatgig/is'

const isGlobalToken = (tokenName) => {
  if (isString(tokenName) && tokenName.startsWith('@')) {
    return true
  }

  return false
}

export default isGlobalToken
