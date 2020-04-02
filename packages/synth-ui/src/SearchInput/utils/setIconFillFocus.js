/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setIconFillFocus = () => ({ synth }) => `
  fill: ${synth.getValue('color:@contrast.1')};
`

export default setIconFillFocus
