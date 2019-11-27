import { isString } from '@beatgig/is'

import {
  TOKEN_CATEGORIES,
  TOKEN_CATEGORY_GLOBAL,
  TOKEN_PROPERTIES,
} from './constants'

const isTokenType = (tokenType) => {
  if (!isString(tokenType)) {
    return false
  }

  const [category, property] = tokenType.split(':')

  return (
    category === TOKEN_CATEGORY_GLOBAL ||
    (TOKEN_CATEGORIES.includes(category) && TOKEN_PROPERTIES.includes(property))
  )
}

export default isTokenType
