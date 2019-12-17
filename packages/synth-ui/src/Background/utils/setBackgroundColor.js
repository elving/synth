import { isGlobalToken } from '@beatgig/synth-core'

/**
 * @typedef {object} Props
 * @property {string} color
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBackgroundColor = () => ({ color, synth }) => `
  background-color: ${synth.getValue(
    isGlobalToken(color) ? color : `color:background:${color}`,
  ) || color};
`

export default setBackgroundColor
