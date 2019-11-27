/**
 * Sets the popup's `height` and `width`.
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setTagsContainerPadding = () => ({ synth }) => `
  padding-right: ${synth.getValue('space:padding:control')[1]}px;
`

export default setTagsContainerPadding
