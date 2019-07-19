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
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { opacity } from '@beatgig/synth-css'
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
 *
 * opacity({
 *   global: {
 *     disabled: 0.35,
 *   },
 * }, '@disabled')
 * // => opacity: 0.35;
 */
export const opacity = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `style:opacity:${name}`)
}
