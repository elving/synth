import { getTokenValue as originalGetTokenValue } from '@beatgig/synth-core'
import { isNumeric, isString } from '@beatgig/is'
import { toArray } from '@beatgig/array'

const defaultTransform = (value) => value

const getTokenValue = (tokens, token, transform = defaultTransform) => {
  const value = originalGetTokenValue(tokens, token, transform)

  const valueArray = Array.isArray(value)
    ? value
    : isString(value)
    ? /** @type {string} */ (value).split(' ')
    : toArray(value)

  return valueArray
    .map((value) => (isNumeric(value) ? `${value}px` : value))
    .join(' ')
}

export default getTokenValue
