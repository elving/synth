/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setCloseButtonMarginLeft = () => ({ synth }) => `
  margin-left: ${synth.getUnit('space:padding:card')};
`

export default setCloseButtonMarginLeft
