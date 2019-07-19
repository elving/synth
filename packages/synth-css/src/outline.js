import {
  getCSSDeclaration,
  getTokenValue,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `outline` property using `box-shadow`.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} [name='base']
 * @returns {string}
 * @example
 *
 * import { outline } from '@beatgig/synth-css'
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
export const outline = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  const outlineWidth = getCSSDeclaration(tokens, `size:outline:${name}`)
  const outlineStyle = getCSSDeclaration(tokens, `style:outline:${name}`)
  const outlineColor = getCSSDeclaration(tokens, `color:outline:${name}`)
  const outlineOffset = getCSSDeclaration(tokens, `space:outline:${name}`)

  return `${outlineWidth} ${outlineStyle} ${outlineColor} ${outlineOffset}`
}
