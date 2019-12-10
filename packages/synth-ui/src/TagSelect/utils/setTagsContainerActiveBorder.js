/**
 * Sets the popup's `height` and `width`.
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setTagsContainerActiveBorder = () => ({ synth }) => `
  border-right-color: ${synth.getValue('color:border:input:focus')};
`

export default setTagsContainerActiveBorder
