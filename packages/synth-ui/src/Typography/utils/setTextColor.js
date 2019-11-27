import { color } from '@beatgig/synth-styled-components'

import { INTENT_HIGHLIGHT, INTENT_NONE } from '../../constants'
import { getIntentColor } from '../../utils'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, ...props }) =>
  color(getIntentColor(intent))(props)

export default setColor
