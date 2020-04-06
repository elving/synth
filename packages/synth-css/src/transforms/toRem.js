import { getTokenValue } from '@beatgig/synth-core'
import { isNumeric } from '@beatgig/is'

import { BASE_FONT_SIZE } from '../constants'

const toRem = (tokens, tokenValue) => {
  const baseFontSize = getTokenValue(tokens, 'size:text:base')

  const tokenValueInt = isNumeric(tokenValue)
    ? Number.parseFloat(/** @type {string} */ (tokenValue))
    : BASE_FONT_SIZE

  const baseFontSizeInt = isNumeric(baseFontSize)
    ? Number.parseFloat(/** @type {string} */ (baseFontSize))
    : BASE_FONT_SIZE

  return `${(tokenValueInt / baseFontSizeInt).toFixed(4)}rem`
}

export default toRem
