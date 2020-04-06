import { BUTTON_INTENT_NONE } from '../constants'
import getIntentColor from './getIntentColor'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBorderColor = () => ({ intent, outline, synth }) => {
  if (intent !== BUTTON_INTENT_NONE) {
    return outline
      ? `border-color: ${synth.getValue(
          `color:${getIntentColor(intent, 'control')}`,
        )};`
      : ''
  } else if (outline) {
    return `border-color: ${synth.getValue('color:background:control')};`
  }

  return ''
}

export default setBorderColor
