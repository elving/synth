/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.fontFamily
 */

/**
 * Returns CSS declaration for the `font-family` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * fontFamily('text_field')
 * // => font-family: helvetica;
 */
export const fontFamily = (tokenName) => ({ synth }) =>
  synth.fontFamily(tokenName)
