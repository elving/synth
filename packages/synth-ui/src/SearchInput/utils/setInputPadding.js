/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setInputPadding = () => ({ synth }) => `
  padding-left: calc(${synth.getUnit('size:@icons.1')} + ${synth.getUnit(
  'space:@spacing.2',
)} + ${synth.getUnit('size:border:control')});`

export default setInputPadding
