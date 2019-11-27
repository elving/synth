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
const setBackgroundColorHover = () => ({ intent, outline, synth }) => {
  const color =
    intent !== INTENT_NONE
      ? synth.getValue(
          `${getIntentColor(intent, 'control')}.${outline ? 0 : 1}`,
        )
      : synth.getValue(`color:background:control${!outline ? ':hover' : ''}`)

  return `background-color: ${color};`
}

export default setBackgroundColorHover
