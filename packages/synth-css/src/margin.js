import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `margin` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
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
 *       'primaryButton:hover': '25%'
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => margin: 25%;
 */
export const margin = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `space:margin:${name}`,
  )
}
