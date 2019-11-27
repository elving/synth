import { color } from '@beatgig/synth-styled-components'

import { INTENT_NONE } from '../../constants'
import { getIntentColor } from '../../utils'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, ...props }) => {
  if (intent !== INTENT_NONE) {
    return color(getIntentColor(intent, 'control'))(props)
  } else {
    return color()(props)
  }
}

export default setColor
