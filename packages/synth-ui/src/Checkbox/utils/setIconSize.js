/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setIconSize = () => ({ synth }) => `
  height: ${synth.getUnit('@fontSizes')};
  width: ${synth.getUnit('@fontSizes')};
`

export default setIconSize
