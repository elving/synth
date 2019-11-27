import { INTENT_NONE } from '../../constants'
import { getIntentColor } from '../../utils'
/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBackgroundColorActive = () => ({ intent, synth }) => {
  const color =
    intent !== INTENT_NONE
      ? synth.getValue(getIntentColor(intent, 'control'))
      : synth.getValue('color:background:control:active')

  return `background-color: ${color};`
}

export default setBackgroundColorActive
