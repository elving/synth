/**
 * @typedef {object} Props
 * @property {boolean} withoutPadding
 * @returns {<T>(props: T & Props) => string}
 */
const setPadding = () => ({ withoutPadding }) => `
  ${withoutPadding ? 'padding: 0;' : ''}
`

export default setPadding
