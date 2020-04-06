/**
 * @description Transforms the given rgba value to a hexadecimal value.
 * @since 2.0.0
 * @example <caption>Transforming a hex color value to an rgba color value</caption>
 * toRgba('#fff') => 'rgba(255, 255, 255, 1)'
 * @example <caption>Transforming a hex color value to an rgba color value with an alpha value</caption>
 * toRgba('#fff', 0.5) => 'rgba(255, 255, 255, 0.5)'
 */
declare function toRgba(hex: string, alpha?: number): string

export default toRgba
