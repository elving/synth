import { INTENT_NONE } from '../../constants'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBorderColorActive = () => ({ intent, outline, synth }) =>
  intent === INTENT_NONE && outline
    ? `border-color: ${synth.getValue('color:background:control:active')};`
    : ''

export default setBorderColorActive
