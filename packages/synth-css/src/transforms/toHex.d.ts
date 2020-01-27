/**
 * @description Transforms the given rgba value to a hexadecimal value.
 * @since 2.0.0
 * @example <caption>Transforming an rgba color with no alpha value to hex</caption>
 * toHex('rgba(255, 255, 255, 1)') => '#ffffff'
 * @example <caption>Transforming an rgba color with an alpha value to hex</caption>
 * toHex('rgba(255, 255, 255, 0.5)') => '#ffffff7f'
 */
declare function toHex(rgba: string): string

export default toHex
