/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.margin
 * @property {boolean} withoutMargin
 * @returns {<T>(props: T & Props) => string}
 */
const setHeadingFontSize = () => ({ synth, withoutMargin }) =>
  withoutMargin ? 'margin: 0;' : synth.margin('heading')

export default setHeadingFontSize
