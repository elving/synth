import { unit } from '@beatgig/synth-core'

/**
 * @typedef {object} Props
 * @property {number} scale
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setSize = () => ({ scale = 0, synth }) => `  
  font-size: ${synth.getUnit(`@icons.${scale}`)};
  height: 1em;
  width: 1em;  
`

export default setSize
