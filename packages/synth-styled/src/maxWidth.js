/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.maxWidth
 */

/**
 * Returns CSS declaration for the `max-width` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * maxWidth('primaryButton')
 * // => max-width: 120px;
 */
export const maxWidth = (tokenName) => ({ synth }) => synth.maxWidth(tokenName)
