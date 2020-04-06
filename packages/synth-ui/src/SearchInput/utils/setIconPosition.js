/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setIconPosition = () => ({ synth }) => `
  left: ${synth.getUnit('space:@spacing.2')};
`

export default setIconPosition
