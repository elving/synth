/**
 * @typedef {object} Props
 * @property {boolean} inline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setChildMargin = () => ({ inline, synth }) => `
  margin-right: ${inline ? synth.getUnit('@spacing.1') : 0};
  margin-bottom: ${inline ? 0 : synth.getUnit('@spacing.1')};
`

export default setChildMargin
