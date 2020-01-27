import { isString } from '@beatgig/is'

const toHex = (rgba) => {
  if (!isString(rgba) || !rgba.startsWith('rgba')) {
    return rgba
  }

  /**
   * Modified from {@link https://gist.github.com/LI-NA/728af23d1cd323f72294c4c991620796#file-convertcolor-js-L21}
   */
  const hex = rgba
    .replace(/(rgb(a?)\(|\))/g, '')
    .split(',')
    .map((value) => Number.parseFloat(value))
    .map((value, index) => {
      /**
       * Returns a 6 digit hexadecimal if the alpha is greater than 1
       */
      if (index === 3 && value >= 1) {
        return ''
      }

      /**
       * Returns a hexadecimal containing alpha values (8 digits)
       */
      return (index === 3 ? Math.floor(value * 255) : value)
        .toString(16)
        .padStart(2, '0')
    })
    .join('')

  return `#${hex}`
}

export default toHex
