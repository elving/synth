import { isString } from '@beatgig/is'

const toRgba = (hex, alpha = 1) => {
  if (isString(hex) && !hex.startsWith('#')) {
    return hex
  }

  /**
   * Modified from {@link https://stackoverflow.com/a/39077686}
   */
  const rgb = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      /**
       * @param {string} match
       * @param {string} r
       * @param {string} g
       * @param {string} b
       * @returns {string}
       */
      (match, r, g, b) => `#${r}${r}${g}${g}${b}${b}`,
    )
    .substring(1)
    .match(/.{2}/g)
    .map(
      /**
       * @param {string} value
       * @returns {number}
       */
      (value) => parseInt(value, 16),
    )
    .join(', ')

  return `rgba(${rgb}, ${alpha})`
}

export default toRgba
