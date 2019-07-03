/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.letterSpacing
 */

/**
 * Returns CSS declaration for the `letter-spacing` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * letterSpacing('menu-link')
 * // => letter-spacing: normal;
 */
export const letterSpacing = (tokenName) => ({ synth }) =>
  synth.letterSpacing(tokenName)
