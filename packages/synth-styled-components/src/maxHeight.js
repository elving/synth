/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.maxHeight
 */

/**
 * Returns CSS declaration for the `max-height` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * maxHeight('primaryButton')
 * // => max-height: 120px;
 */
export const maxHeight = (tokenName) => ({ synth }) =>
  synth.maxHeight(tokenName)
