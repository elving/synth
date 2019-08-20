import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `line-height` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { lineHeight } from '@beatgig/synth-css'
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       'menu_link': 1.5,
 *       'menu_link:disabled': 1.65,
 *     },
 *   },
 * }, 'menu_link')
 * // => line-height: 1.5;
 *
 * lineHeight({
 *   typography: {
 *     lineHeight: {
 *       'menu_link': 1.5,
 *       'menu_link:disabled': 1.65,
 *     },
 *   },
 * }, 'menu_link:disabled')
 * // => line-height: 1.65;
 *
 * lineHeight({
 *   global: {
 *     headingLine: 1.8,
 *   },
 * }, '@headingLine')
 * // => line-height: 1.8;
 */
export const lineHeight = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:lineHeight:${name}`)
}
