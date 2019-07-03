/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.border
 */

/**
 * Returns CSS declaration for the `border` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * border('default_button')
 * // => border: 1px solid #333;
 */
export const border = (tokenName) => ({ synth }) => synth.border(tokenName)
