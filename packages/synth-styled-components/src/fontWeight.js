/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.fontWeight
 */

/**
 * Returns CSS declaration for the `font-weight` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * fontWeight('menu-link')
 * // => font-weight: 300;
 */
export const fontWeight = (tokenName) => ({ synth }) =>
  synth.fontWeight(tokenName)
