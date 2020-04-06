import { isString } from '@beatgig/is'

import getTokenValue from './getTokenValue'
import isValidAliasName from './isValidAliasName'
import isValidTokenConfig from './isValidTokenConfig'
import { TOKEN_CATEGORIES } from './constants'

import {
  throwAliasError,
  throwCategoryError,
  throwTokenConfigError,
} from './errors'

const getTokenAliasValue = (tokens, category, alias) => {
  /**
   * Check if the given `tokens` value is a valid Synth token configuration.
   */
  if (!isValidTokenConfig(tokens)) {
    throwTokenConfigError(tokens)
  }

  if (!isString(category) || !TOKEN_CATEGORIES.includes(category)) {
    throwCategoryError(category)
  }

  if (!isValidAliasName(alias)) {
    throwAliasError(alias)
  }

  const aliasName = alias.split('.')[0].replace('@', '')
  const aliasIndex = alias.split('.')[1]
  const tokenValue = getTokenValue(tokens, `${category}:aliases:${aliasName}`)

  /**
   * If the token's value was a scale alias with an index, get the value from
   * the index.
   */
  if (aliasIndex && Array.isArray(tokenValue)) {
    return tokenValue[Number.parseInt(aliasIndex) - 1 || 0]
  }

  return tokenValue
}

export default getTokenAliasValue
