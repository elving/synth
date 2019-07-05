/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.outline
 */

/**
 * Returns CSS declaration for the `outline` property using `box-shadow`.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * outline('modalInput')
 * // => box-shadow: 0 0 0 1px #333;
 */
export const outline = (tokenName) => ({ synth }) => synth.outline(tokenName)
