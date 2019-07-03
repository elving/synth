/**
 * Validates that the given value is a valid Synth token declaration.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @returns {boolean}
 * @example
 *
 * isTokenDeclaration({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * })
 * // => true
 *
 * isTokenDeclaration('size:maxWidth')
 * // => false
 *
 * isTokenDeclaration({})
 * // => false
 *
 */
export const isTokenDeclaration = (tokens) =>
  tokens &&
  Object.prototype.toString.call(tokens) === '[object Object]' &&
  Object.keys(tokens).length
