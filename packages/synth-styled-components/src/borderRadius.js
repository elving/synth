/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.borderRadius
 */

/**
 * Returns CSS declaration for the `border-radius` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * borderRadius('primary-button')
 * // => border-radius: 5px;
 */
export const borderRadius = (tokenName) => ({ synth }) =>
  synth.borderRadius(tokenName)
