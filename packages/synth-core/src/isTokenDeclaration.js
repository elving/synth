import { isObject, isEmptyObject } from '@beatgig/is'

import {
  TOKEN_CATEGORIES,
  TOKEN_CATEGORY_GLOBAL,
  VALID_DECLARATION_KEYS,
} from './constants'

const isTokenDeclaration = (tokens) => {
  if (!tokens || !isObject(tokens) || isEmptyObject(tokens)) {
    return false
  }

  let isValid = true

  for (const category in tokens) {
    if (!TOKEN_CATEGORIES.includes(category) || !isObject(tokens[category])) {
      isValid = false
      break
    }

    if (category === TOKEN_CATEGORY_GLOBAL) {
      continue
    }

    for (const property in tokens[category]) {
      if (!VALID_DECLARATION_KEYS[category].includes(property)) {
        isValid = false
        break
      }
    }
  }

  return isValid
}

export default isTokenDeclaration
