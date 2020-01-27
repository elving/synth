import { color } from '@beatgig/synth-styled-components'

import { BUTTON_INTENT_HIGHLIGHT } from '../constants'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setColorHover = () => ({ intent, outline, synth }) =>
  intent === BUTTON_INTENT_HIGHLIGHT && outline
    ? `color: ${synth.getValue('color:@BalticSea')};`
    : color()({ synth })

export default setColorHover
