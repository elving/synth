/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.textTransform
 */

/**
 * Returns CSS declaration for the `text-transform` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * textTransform('menuLink')
 * // => text-transform: lowercase;
 */
export const textTransform = (tokenName) => ({ synth }) =>
  synth.textTransform(tokenName)
