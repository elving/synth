/**
 * @typedef {object} Props
 * @property {boolean} disabled
 * @returns {<T>(props: T & Props) => string}
 */
const setPointerEvents = () => ({ disabled }) =>
  `pointer-events: ${disabled ? 'none' : 'inherit'};`

export default setPointerEvents
