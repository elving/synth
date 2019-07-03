/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.left
 */

/**
 * Returns CSS declaration for the `left` property.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {function(Props): string}
 * @example
 *
 * left('card_close_button')
 * // => left: 15px;
 */
export const left = (tokenName) => ({ synth }) => synth.left(tokenName)
