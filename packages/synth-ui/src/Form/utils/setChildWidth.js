/**
 * @typedef {object} Props
 * @property {boolean} fullWidth
 * @returns {<T>(props: T & Props) => string}
 */
const setChildWidth = () => ({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')

export default setChildWidth
