/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setIconSize = () => ({ synth }) => `
  height: ${synth.getUnit('size:@fontSizes.1')};
  width: ${synth.getUnit('size:@fontSizes.1')};
`

export default setIconSize
