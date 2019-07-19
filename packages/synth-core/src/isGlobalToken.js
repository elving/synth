/**
 * Validates that the given value is a valid Synth global token name.
 *
 * @since 1.0.0
 * @param {string} tokenName
 * @returns {boolean}
 * @example
 *
 * isGlobalToken('@helloWorld')
 * // => true
 *
 * isGlobalToken('color:text:button:hover')
 * // => false
 *
 * isGlobalToken('hello')
 * // => false
 */
const isGlobalToken = (tokenName) => {
  if (typeof tokenName !== 'string') {
    return false
  }

  if (tokenName.startsWith('@')) {
    return true
  }

  return false
}

export { isGlobalToken }
