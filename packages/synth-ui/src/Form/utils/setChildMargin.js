/**
 * @typedef {object} Props
 * @property {boolean} inline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setChildMargin = () => ({ inline, synth }) => `
  margin-right: ${inline ? synth.getUnit('space:@spacing.2') : 0};
  margin-bottom: ${inline ? 0 : synth.getUnit('space:@spacing.2')};
`

export default setChildMargin
