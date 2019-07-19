/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.height
 */

/**
 * Returns CSS declaration for the `height` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * height('button')
 * // => height: 50px;
 */
export const height = (tokenName) => ({ synth }) => synth.height(tokenName)
