import { color } from '@beatgig/synth-styled-components'

import { BUTTON_INTENT_HIGHLIGHT, BUTTON_INTENT_NONE } from '../constants'
import getIntentColor from './getIntentColor'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {boolean} outline
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, outline, ...props }) => {
  if (intent !== BUTTON_INTENT_NONE && outline) {
    return color(getIntentColor(intent, 'control'))(props)
  } else if (intent === BUTTON_INTENT_HIGHLIGHT && !outline) {
    return color('@BalticSea')(props)
  } else {
    return color()(props)
  }
}

export default setColor
