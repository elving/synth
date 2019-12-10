/**
 * Returns a CSS property mapping to the given token.
 * @since 1.0.0
 * @example
 * getCSSProperty('color:background')
 * // => "background-color"
 *
 * getCSSProperty('typography:font')
 * // => "font-family"
 */
declare function getCSSProperty(tokenType: string): string

export default getCSSProperty
