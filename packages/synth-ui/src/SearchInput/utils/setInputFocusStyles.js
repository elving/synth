/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setInputFocusStyles = () => ({ synth }) => `
  background-color: ${synth.getValue('color:@Porcelain')};
  border-color: ${synth.getValue('color:@Porcelain')};
  color: ${synth.getValue('color:@BalticSea')};  
`

export default setInputFocusStyles
