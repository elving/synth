import { color } from '@beatgig/synth-styled-components'

import { INTENT_HIGHLIGHT, INTENT_NONE } from '../../constants'
import { getIntentColor } from '../../utils'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @property {boolean} outline
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, outline, ...props }) => {
  if (intent !== INTENT_NONE && outline) {
    return color(getIntentColor(intent, 'control'))(props)
  } else if (intent === INTENT_HIGHLIGHT && !outline) {
    return color('@BalticSea')(props)
  } else {
    return color()(props)
  }
}

export default setColor
