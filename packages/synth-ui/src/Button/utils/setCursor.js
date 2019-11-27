/**
 * @typedef {object} Props
 * @property {boolean} disabled
 * @returns {<T>(props: T & Props) => string}
 */
const setCursor = () => ({ disabled }) =>
  `cursor: ${disabled ? 'not-allowed' : 'pointer'};`

export default setCursor
