/**
 * @typedef {object} Props
 * @property {boolean} disabled
 * @returns {<T>(props: T & Props) => string}
 */
const setOpacity = () => ({ disabled }) => `opacity: ${disabled ? 0.3 : 1};`

export default setOpacity
