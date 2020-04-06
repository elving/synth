import { isEmptyObject, isObject } from '@beatgig/is'

import { TOKEN_CATEGORIES, TOKEN_CONFIG } from './constants'

const isValidTokenConfig = (tokens) => {
  /**
   * Check if the given value is a valid JS plain object.
   */
  if (!isObject(tokens)) {
    return false
  }

  /**
   * Check if the given value has at least one token defined.
   */
  if (isEmptyObject(tokens)) {
    return false
  }

  /**
   * Boolean flag to track whether the given value has valid
   * categories and properties defined.
   */
  let isValid = true

  /**
   * Loop through all categories, i.e., top level object keys.
   */
  for (const category in tokens) {
    /**
     * Check if the current key is a valid category and it's value is a
     * plain JS object.
     */
    if (!TOKEN_CATEGORIES.includes(category) || !isObject(tokens[category])) {
      isValid = false
      break
    }

    /**
     * Loop through all properties within the current category, i.e.,
     * top level object keys of the current category object.
     */
    for (const property in tokens[category]) {
      /**
       * Check if the current key from the current category object is a valid
       * property.
       */
      if (!TOKEN_CONFIG[category].includes(property)) {
        isValid = false
        break
      }
    }

    /**
     * Exit the main loop as soon as we find an error.
     */
    if (!isValid) {
      break
    }
  }

  return isValid
}

export default isValidTokenConfig
