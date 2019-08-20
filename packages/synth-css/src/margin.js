import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `margin` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { margin } from '@beatgig/synth-css'
 *
 * margin({
 *   space: {
 *     margin: {
 *       'primaryButton': '10%',
 *       'primaryButton:hover': '25%'
 *     },
 *   },
 * }, 'primaryButton')
 * // => margin: 10%;
 *
 * margin({
 *   space: {
 *     margin: {
 *       'primaryButton': '10%',
 *       'primaryButton:hover': ['10%', '25%']
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => margin: 10% 25%;
 *
 * margin({
 *   global: {
 *     spacing: [5, 10, 15, 20],
 *   },
 * }, '@spacing.1')
 * // => margin: 10px;
 */
export const margin = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `space:margin:${name}`)
}
