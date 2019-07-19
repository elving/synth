/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.top
 */

/**
 * Returns CSS declaration for the `top` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * top('card_close_button')
 * // => top: 15px;
 */
export const top = (tokenName) => ({ synth }) => synth.top(tokenName)
