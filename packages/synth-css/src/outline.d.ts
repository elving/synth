import { SynthTokenDeclaration } from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `outline` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import { outline } from '@beatgig/synth-css'
 *
 * outline({
 *   color: {
 *     outline: {
 *       base: 'blue',
 *       modalInput: {
 *         default: '#333',
 *         disabled: '#222',
 *       },
 *     },
 *   },
 *   size: {
 *     outline: {
 *       base: '5px',
 *       modalInput: {
 *         default: '1px',
 *         disabled: '3px',
 *       },
 *     },
 *   },
 *   space: {
 *     outline: {
 *       base: 1,
 *       modalInput: 2,
 *     }
 *   },
 *   style: {
 *     outline: {
 *       base: 'solid',
 *       modalInput: 'solid',
 *     }
 *   }
 * })
 * // outline-width: 5px;
 * // outline-style: solid;
 * // outline-color: blue;
 * // outline-offset: 1px;
 *
 * outline({
 *   color: {
 *     outline: {
 *       modalInput: {
 *         default: '#333',
 *         disabled: '#222',
 *       },
 *     },
 *   },
 *   size: {
 *     outline: {
 *       modalInput: {
 *         default: '1px',
 *         disabled: '3px',
 *       },
 *     },
 *   },
 *   space: {
 *     outline: {
 *       modalInput: 2,
 *     }
 *   },
 *   style: {
 *     outline: {
 *       modalInput: 'solid',
 *     }
 *   }
 * }, 'modalInput')
 * // =>
 * // outline-width: 1px;
 * // outline-style: solid;
 * // outline-color: #333;
 * // outline-offset: 2px;
 *
 * outline({
 *   color: {
 *     outline: {
 *       modalInput: {
 *         default: '#333',
 *         disabled: '#222',
 *       },
 *     },
 *   },
 *   size: {
 *     outline: {
 *       modalInput: {
 *         default: '1px',
 *         disabled: '3px',
 *       },
 *     },
 *   },
 *   space: {
 *     outline: {
 *       modalInput: 2,
 *     }
 *   },
 *   style: {
 *     outline: {
 *       modalInput: 'solid',
 *     }
 *   }
 * }, 'modalInput:disabled')
 * // =>
 * // outline-width: 3px;
 * // outline-style: solid;
 * // outline-color: #222;
 * // outline-offset: 2px;
 */
declare function outline(tokens: SynthTokenDeclaration, tokenName?: string): string

export default outline
