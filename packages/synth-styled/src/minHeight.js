/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.minHeight
 */

/**
 * Returns CSS declaration for the `min-height` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * minHeight('primaryButton')
 * // => min-height: 120px;
 */
export const minHeight = (tokenName) => ({ synth }) =>
  synth.minHeight(tokenName)
