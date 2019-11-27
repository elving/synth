/**
 * @typedef {object} Props
 * @property {boolean} centered
 * @returns {<T>(props: T & Props) => string}
 */
const setTextAlign = () => ({ centered }) =>
  `text-align: ${centered ? 'center' : 'left'};`

export default setTextAlign
