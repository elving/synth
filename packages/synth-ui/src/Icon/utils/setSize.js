/**
 * @typedef {object} Props
 * @property {number} scale
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setSize = () => ({ scale = 1, synth }) => `  
  font-size: ${synth.getUnit(`size:@icons.${scale}`)};
  height: 1em;
  width: 1em;  
`

export default setSize
