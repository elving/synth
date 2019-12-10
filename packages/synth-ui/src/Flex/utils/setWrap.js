/**
 * Will set the `flex-wrap` css rule based on the current component's props.
 * @typedef {object} Props
 * @property {boolean} wrap
 * @property {boolean} wrapReverse
 * @returns {<T>(props: T & Props) => string}
 */
const setWrap = () => ({ wrap, wrapReverse }) => {
  if (wrap) {
    return 'flex-wrap: wrap;'
  } else if (wrapReverse) {
    return 'flex-wrap: wrap-reverse;'
  }

  return 'flex-wrap: nowrap;'
}

export default setWrap
