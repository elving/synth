/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.right
 */

/**
 * Returns CSS declaration for the `right` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * right('card_close_button')
 * // => right: 15px;
 */
export const right = (tokenName) => ({ synth }) => synth.right(tokenName)
