/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setBottomContentMargin = () => ({ synth }) => {
  const padding = synth.getUnit('space:padding:card')
  return `margin: 0 -${padding} -${padding};`
}

export default setBottomContentMargin
