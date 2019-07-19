/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.lineHeight
 */

/**
 * Returns CSS declaration for the `line-height` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * lineHeight('menu_link')
 * // => line-height: 1.5;
 */
export const lineHeight = (tokenName) => ({ synth }) =>
  synth.lineHeight(tokenName)
