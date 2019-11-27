/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setTopContentMargin = () => ({ synth }) => {
  const padding = synth.getUnit('space:padding:card')
  return `margin: -${padding} -${padding} 0;`
}

export default setTopContentMargin
