/**
 * Gets the grid item's width value given the number of columns of it's parent
 * grid.
 * @typedef {object} Props
 * @property {number} columnSize
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const getGridItemWidth = () => ({ columnSize, synth }) => {
  const spacing = synth.getUnit('@spacing.2')
  return `width: calc(100% / ${columnSize} - (${spacing} - ${spacing} / ${columnSize}));`
}

export default getGridItemWidth
