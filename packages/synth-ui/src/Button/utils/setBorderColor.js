import { INTENT_NONE } from '../../constants'
import { getIntentColor } from '../../utils'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBorderColor = () => ({ intent, outline, synth }) => {
  if (intent !== INTENT_NONE) {
    return outline
      ? `border-color: ${synth.getValue(getIntentColor(intent, 'control'))};`
      : ''
  } else if (outline) {
    return `border-color: ${synth.getValue('color:background:control')};`
  }

  return ''
}

export default setBorderColor
