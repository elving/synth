/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setMenuPadding = () => ({ synth }) => `
  padding: ${synth.getUnit('@spacing.1')} 0;
`

export default setMenuPadding
