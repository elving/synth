/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setIconPosition = () => ({ synth }) => `
  left: ${synth.getUnit('@spacing.1')};
`

export default setIconPosition
