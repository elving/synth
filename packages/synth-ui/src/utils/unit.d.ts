/**
 * Returns the given `value` as a CSS unit.
 * @since 1.0.0
 * @example
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
declare function unit<T>(value: T): string

export default unit
