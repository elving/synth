/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.fontSize
 */

/**
 * Returns CSS declaration for the `font-size` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * fontSize('menu_link')
 * // => font-size: 16px;
 */
export const fontSize = (tokenName) => ({ synth }) => synth.fontSize(tokenName)
