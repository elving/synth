import { color } from '@beatgig/synth-styled-components'

import { INTENT_HIGHLIGHT } from '../../constants'

/**
 * @typedef {object} Props
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setColorHover = () => ({ intent, outline, synth }) =>
  intent === INTENT_HIGHLIGHT && outline
    ? `color: ${synth.getValue('@BalticSea')};`
    : color()({ synth })

export default setColorHover
