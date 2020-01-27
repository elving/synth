import { isNumeric, isString } from '@beatgig/is'

const unit = (value) => {
  const values = Array.isArray(value)
    ? value
    : isString(value)
    ? value.split(/\s/)
    : [value]

  return values
    .map((value) => (isNumeric(value) ? `${value}px` : value))
    .join(' ')
}

export default unit
