/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setActionsBorder = () => ({ synth }) => `
  border-top: 1px solid ${synth.getValue('color:@Mako')};
`

export default setActionsBorder
