import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `max-width` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { maxWidth } from '@beatgig/synth-css'
 *
 * maxWidth({
 *   size: {
 *     maxWidth: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton')
 * // => max-width: 120px;
 *
 * maxWidth({
 *   size: {
 *     maxWidth: {
 *       primaryButton: '120px',
 *       'primaryButton:hover': '100%',
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => max-width: 100%;
 *
 * maxWidth({
 *   global: {
 *     contentWidth: 1024,
 *   },
 * }, '@contentWidth')
 * // => max-width: 1024px;
 */
export const maxWidth = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:maxWidth:${name}`)
}
