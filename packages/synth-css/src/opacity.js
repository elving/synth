import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `opacity` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * opacity({
 *   style: {
 *     opacity: {
 *       form_button: 1,
 *       'form_button:disabled': 0.5,
 *     },
 *   },
 * }, 'form_button')
 * // => opacity: 1;
 *
 * opacity({
 *   style: {
 *     opacity: {
 *       form_button: 1,
 *       'form_button:disabled': 0.5,
 *     },
 *   },
 * }, 'form_button:disabled')
 * // => opacity: 0.5;
 */
export const opacity = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `style:opacity:${name}`,
  )
}
