import getHeadingLevelScale from './getHeadingLevelScale'

/**
 * @typedef {object} Props
 * @property {string} level
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const setHeadingFontSize = () => ({ level, synth }) => `
  font-size: ${synth.getUnit(`size:@headings.${getHeadingLevelScale(level)}`)};
`

export default setHeadingFontSize
