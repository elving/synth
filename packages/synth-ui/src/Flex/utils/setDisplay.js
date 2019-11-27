/**
 * Will set the `display` css rule based on the current component's props.
 * @typedef {object} Props
 * @property {boolean} inline
 * @returns {<T>(props: T & Props) => string}
 */
const setDisplay = () => ({ inline }) =>
  `display: ${inline ? 'inline-flex' : 'flex'};`

export default setDisplay
