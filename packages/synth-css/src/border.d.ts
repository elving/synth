import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `border` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { border } from '@beatgig/synth-css'
 *
 * border({
 *   color: {
 *     border: {
 *       base: '#777',
 *     },
 *   },
 *   size: {
 *     border: {
 *       base: '2px',
 *     },
 *   },
 *   style: {
 *     border: {
 *       base: 'solid',
 *     },
 *   }
 * })
 * // =>
 * // border-width: 2px;
 * // border-style: solid;
 * // border-color: #777;
 *
 * border({
 *   color: {
 *     border: {
 *       default_button: '#333',
 *     },
 *   },
 *   size: {
 *     border: {
 *       default_button: '1px',
 *     },
 *   },
 *   style: {
 *     border: {
 *       default_button: 'solid',
 *     },
 *   }
 * }, 'default_button')
 * // =>
 * // border-width: 1px;
 * // border-style: solid;
 * // border-color: #333;
 *
 * border({
 *   color: {
 *     border: {
 *       default_button: {
 *         default: '#333',
 *         hover: '#111',
 *       },
 *     },
 *   },
 *   size: {
 *     border: {
 *       default_button: {
 *         default: '1px',
 *         hover: '2px',
 *       },
 *     },
 *   },
 *   style: {
 *     border: {
 *       default_button: {
 *         default: 'solid',
 *         hover: 'solid',
 *       },
 *     },
 *   }
 * }, 'default_button:hover')
 * // =>
 * // border-width: 2px;
 * // border-style: solid;
 * // border-color: #111;
 */
declare function border(tokens: SynthTokenDeclaration, tokenName?: string): string

export default border
