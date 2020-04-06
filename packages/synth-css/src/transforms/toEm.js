import { getTokenValue } from '@beatgig/synth-core'
import { isNumeric } from '@beatgig/is'

import { BASE_FONT_SIZE } from '../constants'

const toEm = (tokens, tokenValue, relativeTo = 'base') => {
  const relativeFontSize = getTokenValue(tokens, `size:text:${relativeTo}`)

  const tokenValueInt = isNumeric(tokenValue)
    ? Number.parseFloat(/** @type {string} */ (tokenValue))
    : BASE_FONT_SIZE

  const relativeFontSizeInt = isNumeric(relativeFontSize)
    ? Number.parseFloat(/** @type {string} */ (relativeFontSize))
    : BASE_FONT_SIZE

  return `${(tokenValueInt / relativeFontSizeInt).toFixed(4)}em`
}

export default toEm
