import getTokenStructure from './getTokenStructure'
import isValidAliasName from './isValidAliasName'
import { TOKEN_CATEGORIES, TOKEN_CONFIG, TOKEN_STATES } from './constants'

const isValidToken = (token) => {
  const { category, property, name, state } = getTokenStructure(token)

  /**
   * Check whether the given token has a category.
   */
  if (!category) {
    return false
  }

  /**
   * Check whether the given token has a valid category.
   */
  if (!TOKEN_CATEGORIES.includes(category)) {
    return false
  }

  /**
   * Check whether the given token has a property or if it's referencing an alias directly.
   */
  if (!property && !isValidAliasName(property)) {
    return false
  }

  /**
   * Check whether the given token has a valid property.
   */
  if (
    property &&
    !isValidAliasName(property) &&
    !TOKEN_CONFIG[category].includes(property)
  ) {
    return false
  }

  /**
   * Check whether the given token has a valid state.
   */
  if (state && !TOKEN_STATES.includes(state)) {
    return false
  }

  return true
}

export default isValidToken
