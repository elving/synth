import { BUTTON_INTENT_NONE } from '../constants'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBorderColorActive = () => ({ intent, outline, synth }) =>
  intent === BUTTON_INTENT_NONE && outline
    ? `border-color: ${synth.getValue('color:background:control:active')};`
    : ''

export default setBorderColorActive
