import { isValidAliasName } from '@beatgig/synth-core'

/**
 * @typedef {object} Props
 * @property {string} color
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBackgroundColor = () => ({ color, synth }) => `
  background-color: ${synth.getValue(
    isValidAliasName(color) ? `color:${color}` : `color:background:${color}`,
  ) ||
    color ||
    'inherit'};
`

export default setBackgroundColor
