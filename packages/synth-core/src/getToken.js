import { isObject } from '@beatgig/is'

import getTokenStructure from './getTokenStructure'
import isValidToken from './isValidToken'
import isValidTokenConfig from './isValidTokenConfig'
import isValidAliasName from './isValidAliasName'
import { throwTokenError, throwTokenConfigError } from './errors'

const getToken = (tokens, token, ignoreState) => {
  /**
   * Check if the given `tokens` value is a valid Synth token configuration.
   */
  if (!isValidTokenConfig(tokens)) {
    throwTokenConfigError(tokens)
  }

  /**
   * Check if the given `token` value is a valid Synth token.
   */
  if (!isValidToken(token)) {
    throwTokenError(token)
  }

  let tokenContent
  let { category, property, name, state = 'default' } = getTokenStructure(token)

  /**
   * Covers the case where you want to reference a token alias
   * directly, e.g., `color:@primary`.
   */
  name = name ?? property

  if (isValidAliasName(name)) {
    const aliasIndex = name.split('.')[1]

    tokenContent =
      tokens?.[category]?.aliases?.[name.replace('@', '').split('.')[0]]

    if (Array.isArray(tokenContent) && aliasIndex) {
      tokenContent = tokenContent[Number.parseInt(aliasIndex) - 1 || 0]
    }
  } else {
    tokenContent = tokens?.[category]?.[property]?.[name ?? 'base']
  }

  /**
   * Checks if the token's content might be a metadata or state object.
   */
  const contentIsObject = isObject(tokenContent)

  return !ignoreState && state && contentIsObject && tokenContent[state]
    ? tokenContent[state]
    : tokenContent
}

export default getToken
