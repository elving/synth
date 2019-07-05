import {
  getTokenValue,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `outline` property using `box-shadow`.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * import { outline } from '@beatgig/synth-css'
 *
 * outline({
 *   color: {
 *     outline: {
 *       modalInput: '#333',
 *       'modalInput:focus': '#222',
 *     },
 *   },
 *   size: {
 *     outline: {
 *       modalInput: '1px',
 *       'modalInput:focus': '3px'
 *     }
 *   }
 * }, 'modalInput')
 * // => box-shadow: 0 0 0 1px #333;
 *
 * outline({
 *   color: {
 *     outline: {
 *       modalInput: '#333',
 *       'modalInput:focus': '#222',
 *     },
 *   },
 *   size: {
 *     outline: {
 *       modalInput: '1px',
 *       'modalInput:focus': '3px'
 *     }
 *   }
 * }, 'modalInput:focus')
 * // => box-shadow: 0 0 0 3px #222;
 */
export const outline = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return `box-shadow: 0 0 0 ${getTokenValue(
    tokens,
    isTokenName(name) ? name : `size:outline:${name}`,
  )} ${getTokenValue(
    tokens,
    isTokenName(name) ? name : `color:outline:${name}`,
  )};`
}
