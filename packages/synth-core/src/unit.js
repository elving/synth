/**
 * Returns the given `value` as a CSS unit.
 *
 * @since 1.0.0
 * @param {number|string|array} value
 * @returns {string}
 * @example
 *
 * unit(10)
 * // => 10px
 *
 * unit('10em')
 * // => 10em
 *
 * unit([10, 25])
 * // => '10px 25px'
 *
 * unit([10, '25%'])
 * // => '10px 25%'
 */
const unit = (value) =>
  (Array.isArray(value) ? value : [value])
    .map((value) =>
      !isNaN(Number.parseFloat(value)) && Number.isFinite(value)
        ? `${value}px`
        : value,
    )
    .join(' ')

export { unit }
