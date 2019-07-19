/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.minWidth
 */

/**
 * Returns CSS declaration for the `min-width` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * minWidth('primaryButton')
 * // => min-width: 120px;
 */
export const minWidth = (tokenName) => ({ synth }) => synth.minWidth(tokenName)
