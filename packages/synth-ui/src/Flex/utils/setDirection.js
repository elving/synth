/**
 * Will set the `flex-direction` css rule based on the current
 * component's props.
 * @typedef {object} Props
 * @property {boolean} column
 * @property {boolean} columnReverse
 * @property {boolean} rowReverse
 * @returns {<T>(props: T & Props) => string}
 */
const setDirection = () => ({ column, rowReverse, columnReverse }) => {
  if (column) {
    return 'flex-direction: column;'
  } else if (rowReverse) {
    return 'flex-direction: row-reverse;'
  } else if (columnReverse) {
    return 'flex-direction: column-reverse;'
  }

  return 'flex-direction: row;'
}

export default setDirection
