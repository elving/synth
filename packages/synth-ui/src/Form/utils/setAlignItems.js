/**
 * @typedef {object} Props
 * @property {boolean} centered
 * @returns {<T>(props: T & Props) => string}
 */
const setAlignItems = () => ({ centered }) =>
  `align-items: ${centered ? 'center' : 'flex-start'};`

export default setAlignItems
