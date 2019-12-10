/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setInputFocusStyles = () => ({ synth }) => `
  background-color: ${synth.getValue('@Porcelain')};
  border-color: ${synth.getValue('@Porcelain')};
  color: ${synth.getValue('@BalticSea')};  
`

export default setInputFocusStyles
