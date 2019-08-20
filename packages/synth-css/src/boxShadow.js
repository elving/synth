import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `box-shadow` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { boxShadow } from '@beatgig/synth-css'
 *
 * boxShadow({
 *   style: {
 *     shadow: {
 *       textInput: '0 0 1px #333',
 *       'textInput:focus': '0 0 3px #333',
 *     },
 *   },
 * }, 'textInput')
 * // => box-shadow: 0 0 1px #333;
 *
 * boxShadow({
 *   style: {
 *     shadow: {
 *       textInput: '0 0 1px #333',
 *       'textInput:focus': '0 0 3px #333',
 *     },
 *   },
 * }, 'textInput:focus')
 * // => box-shadow: 0 0 3px #333;
 *
 * boxShadow({
 *   global: {
 *     subtleShadow: '0 0 2px rgba(0, 0, 0, 0.15)',
 *   },
 * }, '@subtleShadow')
 * // => box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
 */
export const boxShadow = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `style:shadow:${name}`)
}
