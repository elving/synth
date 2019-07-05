import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `padding` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * import { padding } from '@beatgig/synth-css'
 *
 * padding({
 *   space: {
 *     padding: {
 *       'primaryButton': '10px 15px',
 *       'primaryButton:hover': '15%'
 *     },
 *   },
 * }, 'primaryButton')
 * // => padding: 10px 15px;
 *
 * padding({
 *   space: {
 *     padding: {
 *       'primaryButton': '10px 15px',
 *       'primaryButton:hover': '15%'
 *     },
 *   },
 * }, 'primaryButton:hover')
 * // => padding: 15%;
 */
export const padding = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `space:padding:${name}`,
  )
}
