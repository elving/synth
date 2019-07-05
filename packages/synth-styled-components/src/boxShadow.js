/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.boxShadow
 */

/**
 * Returns CSS declaration for the `box-shadow` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * boxShadow('textInput')
 * // => box-shadow: 0 0 1px #333;
 */
export const boxShadow = (tokenName) => ({ synth }) =>
  synth.boxShadow(tokenName)
