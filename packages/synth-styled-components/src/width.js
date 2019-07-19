/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.width
 */

/**
 * Returns CSS declaration for the `width` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * width('primaryButton')
 * // => width: 120px;
 */
export const width = (tokenName) => ({ synth }) => synth.width(tokenName)
