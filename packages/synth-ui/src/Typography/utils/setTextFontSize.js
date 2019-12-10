import { isNil } from '@beatgig/is'

/**
 * @typedef {object} Props
 * @property {number} scale
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setTextFontSize = () => ({ scale, synth }) => `
  font-size: ${
    isNil(scale)
      ? synth.getUnit('typography:size:text')
      : synth.getUnit(`@fontSizes.${scale}`)
  };
`

export default setTextFontSize
