/**
 * @typedef {object} Props
 * @property {boolean} inline
 * @returns {<T>(props: T & Props) => string}
 */
const setFlexDirection = () => ({ inline }) =>
  `flex-direction: ${inline ? 'row' : 'column'};`

export default setFlexDirection
