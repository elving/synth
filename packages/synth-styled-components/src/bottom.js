/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.bottom
 */

/**
 * Returns CSS declaration for the `bottom` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * bottom('card_close_button')
 * // => bottom: 15px;
 */
export const bottom = (tokenName) => ({ synth }) => synth.bottom(tokenName)
