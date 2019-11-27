/**
 * @typedef {object} Props
 * @property {boolean} inline
 * @returns {<T>(props: T & Props) => string}
 */
const setDisplay = () => ({ inline }) => `
  display: ${inline ? 'inline-block' : 'block'};
`

export default setDisplay
