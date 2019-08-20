import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `background-color` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { backgroundColor } from '@beatgig/synth-css'
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: '#333',
 *     },
 *   },
 * }, 'primaryButton')
 * // => background-color: #333;
 *
 * backgroundColor({
 *   color: {
 *     background: {
 *       primaryButton: '#333',
 *       'primaryButton:hover': '#111',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => background-color: #111;
 *
 * backgroundColor({
 *   global: {
 *     universe: '#434343',
 *   },
 * }, '@universe')
 * // => background-color: #434343;
 */
export const backgroundColor = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `color:background:${name}`)
}
