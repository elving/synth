/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.color
 */

/**
 * Returns CSS declaration for the `color` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * color('caption')
 * // => color: #333;
 */
export const color = (tokenName) => ({ synth }) => synth.color(tokenName)
