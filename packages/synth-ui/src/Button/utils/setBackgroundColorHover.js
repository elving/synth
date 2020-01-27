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
const setBackgroundColorHover = () => ({ intent, outline, synth }) => {
  const color =
    intent !== BUTTON_INTENT_NONE
      ? synth.getValue(
          `color:${getIntentColor(intent, 'control').split('.')[0]}.${
            outline ? 1 : 2
          }`,
        )
      : synth.getValue(`color:background:control${!outline ? ':hover' : ''}`)

  return `background-color: ${color};`
}

export default setBackgroundColorHover
