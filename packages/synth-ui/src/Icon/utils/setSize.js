import { unit } from '@beatgig/synth-core'

/**
 * @typedef {object} Props
 * @property {string|number} height
 * @property {number} scale
 * @property {string|number} width
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setSize = () => ({ height, scale = 0, synth, width }) => `
  height: ${unit(height || synth.getUnit(`@icons.${scale}`) || 'auto')};
  width: ${unit(width || synth.getUnit(`@icons.${scale}`) || 'auto')};
`

export default setSize
