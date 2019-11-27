/**
 * Will set css rules for centering (align-items, place-content) based on the
 * current component's props.
 * @typedef {object} Props
 * @property {boolean} center
 * @returns {<T>(props: T & Props) => string}
 */
const setCenter = () => ({ center }) =>
  center ? 'align-items: center; justify-content: center;' : ''

export default setCenter
