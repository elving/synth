/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.textDecoration
 */

/**
 * Returns CSS declaration for the `text-decoration` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * textDecoration('menu_link')
 * // => text-decoration: none;
 */
export const textDecoration = (tokenName) => ({ synth }) =>
  synth.textDecoration(tokenName)
