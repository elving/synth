/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.zIndex
 */

/**
 * Returns CSS declaration for the `z-index` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * zIndex('card_close_button')
 * // => z-index: 1;
 */
export const zIndex = (tokenName) => ({ synth }) => synth.zIndex(tokenName)
