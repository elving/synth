import { BUTTON_INTENT_NONE } from '../constants'
import getIntentColor from './getIntentColor'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBackgroundColorActive = () => ({ intent, synth }) => {
  const color =
    intent !== BUTTON_INTENT_NONE
      ? synth.getValue(getIntentColor(intent, 'control'))
      : synth.getValue('color:background:control:active')

  return `background-color: ${color};`
}

export default setBackgroundColorActive
