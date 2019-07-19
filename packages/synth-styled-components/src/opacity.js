/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.opacity
 */

/**
 * Returns CSS declaration for the `opacity` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * opacity('form_button')
 * // => opacity: 1;
 */
export const opacity = (tokenName) => ({ synth }) => synth.opacity(tokenName)
