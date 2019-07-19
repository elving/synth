/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {function(string): string} synth.margin
 */

/**
 * Returns CSS declaration for the `margin` property.
 *
 * @since 1.0.0
 * @param {string} [tokenName]
 * @returns {function(Props & object): string}
 * @example
 *
 * margin('primaryButton')
 * // => margin: 10%;
 */
export const margin = (tokenName) => ({ synth }) => synth.margin(tokenName)
