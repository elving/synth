/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.padding
 */

/**
 * Returns CSS declaration for the `padding` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * padding('primaryButton')
 * // => padding: 10px 15px;
 */
export const padding = (tokenName) => ({ synth }) => synth.padding(tokenName)
