/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setIconFill = () => ({ synth }) => `
  fill: ${synth.getValue('color:@prominent')};
`

export default setIconFill
