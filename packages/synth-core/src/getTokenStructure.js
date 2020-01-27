import { isString } from '@beatgig/is'

const getTokenStructure = (token) => {
  if (!isString(token)) {
    throw new TypeError(`Expected a string, got "${token}" instead`)
  }

  const [category, property, name, state] = token.split(':')

  return {
    category,
    property,
    name,
    state,
  }
}

export default getTokenStructure
