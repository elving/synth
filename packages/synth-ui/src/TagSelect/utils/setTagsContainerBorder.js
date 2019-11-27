/**
 * Sets the popup's `height` and `width`.
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setTagsContainerBorder = () => ({ synth }) => `
  border-right: 2px solid ${synth.getValue('color:border:input')};
`

export default setTagsContainerBorder
