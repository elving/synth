/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setInputPadding = () => ({ synth }) => `
  padding-left: calc(${synth.getUnit('@icons')} + ${synth.getUnit(
  '@spacing.1',
)} + ${synth.getUnit('size:border:control')});`

export default setInputPadding
