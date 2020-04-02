/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setInputFocusStyles = () => ({ synth }) => `
  background-color: ${synth.getValue('color:@prominent')};
  border-color: ${synth.getValue('color:@prominent')};
  color: ${synth.getValue('color:@contrast.1')};  
`

export default setInputFocusStyles
