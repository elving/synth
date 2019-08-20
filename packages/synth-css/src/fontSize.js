import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-size` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { fontSize } from '@beatgig/synth-css'
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: '16px',
 *       'menu_link:disabled': '14px',
 *     },
 *   },
 * }, 'menu_link')
 * // => font-size: 16px;
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: '16px',
 *       'menu_link:disabled': '14px',
 *     },
 *   },
 * }, 'menu_link:disabled')
 * // => font-size: 14px;
 *
 * fontSize({
 *   global: {
 *     fontSizes: [12, 14, 18, 20, 22],
 *   },
 * }, '@fontSizes')
 * // => font-size: 12px;
 */
export const fontSize = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:size:${name}`)
}
