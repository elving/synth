/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setMenuDividerBorder = () => ({ synth }) => `
  border: 0 none;
  border-bottom: 1px solid ${synth.getValue('color:border:popup')};
`

export default setMenuDividerBorder
