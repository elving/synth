/**
 * @param {string} value
 * @returns {string}
 */
const toCamelCase = (value) =>
  value
    .split('-')
    .map((value, index) =>
      index
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value.toLowerCase(),
    )
    .join('')

export default toCamelCase
