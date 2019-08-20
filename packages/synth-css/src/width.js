import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `width` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { width } from '@beatgig/synth-css'
 *
 * width({
 *   size: {
 *     width: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton')
 * // => width: 120px;
 *
 * width({
 *   size: {
 *     width: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => width: 100%;
 *
 * width({
 *   global: {
 *     contentWidths: [300, 600, 900],
 *   },
 * }, '@contentWidths.1')
 * // => width: 600px;
 */
export const width = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:width:${name}`)
}
