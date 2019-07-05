import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `border-radius` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * import { borderRadius } from '@beatgig/synth-css'
 *
 * borderRadius({
 *   size: {
 *     radius: {
 *       'primary-button': '5px',
 *       'primary-button:disabled': '0px',
 *     },
 *   },
 * }, 'primary-button')
 * // => border-radius: 5px;
 *
 * borderRadius({
 *   size: {
 *     radius: {
 *       'primary-button': '5px',
 *       'primary-button:disabled': '0px',
 *     },
 *   },
 * }, 'primary-button:disabled')
 * // => border-radius: 0px;
 */
export const borderRadius = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `size:radius:${name}`,
  )
}
