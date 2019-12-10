import { color } from '@beatgig/synth-styled-components'

import { BUTTON_INTENT_NONE } from '../../Button/constants'
import { getIntentColor } from '../../Button/utils'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, ...props }) => {
  if (intent !== BUTTON_INTENT_NONE) {
    return color(getIntentColor(intent, 'control'))(props)
  } else {
    return color()(props)
  }
}

export default setColor
