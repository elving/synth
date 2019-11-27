import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `font-size` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 * import { fontSize } from '@beatgig/synth-css'
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       base: '18px',
 *     },
 *   },
 * })
 * // => font-size: 18px;
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: '16px',
 *     },
 *   },
 * }, 'menu_link')
 * // => font-size: 16px;
 *
 * fontSize({
 *   typography: {
 *     size: {
 *       menu_link: {
 *         default: '16px',
 *         disabled: '14px',
 *       },
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
declare function fontSize(tokens: SynthTokenDeclaration, tokenName?: string): string

export default fontSize
