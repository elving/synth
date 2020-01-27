import { POSITIONS } from '../constants'

/**
 * @typedef {object} Props
 * @property {number} scale
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setMargin = () => ({ scale = 1, synth, ...props }) => {
  let css = ''
  const margin = synth.getUnit(`space:@spacing.${scale}`)

  Object.keys(props).forEach((key) => {
    if (POSITIONS.includes(key) && props[key]) {
      css += `margin-${key}: ${margin};`
    }
  })

  return css || `margin: ${margin};`
}

export default setMargin
