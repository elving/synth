/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setPadding = () => ({ synth }) => {
  const [paddingY, paddingX] = synth.getUnit('space:padding:control').split(' ')
  const iconSize = synth.getUnit('@icons.5')

  return `padding: ${paddingY} calc(${iconSize} + ${paddingX}) ${paddingY} ${paddingX};`
}

export default setPadding
