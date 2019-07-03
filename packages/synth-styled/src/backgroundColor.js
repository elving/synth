/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.backgroundColor
 */

/**
 * Returns CSS declaration for the `background-color` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * backgroundColor('primaryButton')
 * // => background-color: #333;
 */
export const backgroundColor = (tokenName) => ({ synth }) =>
  synth.backgroundColor(tokenName)
