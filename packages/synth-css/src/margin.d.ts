import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `margin` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { margin } from '@beatgig/synth-css'
 *
 * margin({
 *   space: {
 *     margin: {
 *       base: '2%',
 *       medium: '10%',
 *     },
 *   },
 * })
 * // => margin: 2%;
 *
 * margin({
 *   space: {
 *     margin: {
 *       medium: '10%',
 *     },
 *   },
 * }, 'medium')
 * // => margin: 10%;
 *
 * margin({
 *   space: {
 *     margin: {
 *       medium: {
 *         default: '10%',
 *         hover: ['10%', '25%'],
 *       },
 *     },
 *   },
 * }, 'medium:hover')
 * // => margin: 10% 25%;
 *
 * margin({
 *   global: {
 *     spacing: [5, 10, 15, 20],
 *   },
 * }, '@spacing.1')
 * // => margin: 10px;
 */
declare function margin(tokens: SynthTokenDeclaration, tokenName?: string): string

export default margin
