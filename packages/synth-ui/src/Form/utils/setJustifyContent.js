/**
 * @typedef {object} Props
 * @property {boolean} centered
 * @returns {<T>(props: T & Props) => string}
 */
const setJustifyContent = () => ({ centered }) =>
  `justify-content: ${centered ? 'center' : 'flex-start'};`

export default setJustifyContent
