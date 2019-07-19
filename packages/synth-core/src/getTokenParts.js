import { isGlobalToken } from './isGlobalToken'
import { isTokenName } from './isTokenName'
import { TOKEN_CATEGORY_GLOBAL } from './constants'

/**
 * @typedef {object} TokenParts
 * @property {string} category
 * @property {string} modifier
 * @property {string} name
 * @property {string} property
 */

/**
 * Returns an object containing all the parts of a Synth token.
 *
 * @since 1.0.0
 * @param {string} tokenName - A valid Synth token name, e.g. `color:text:button`.
 * @returns {TokenParts}
 * @example
 *
 * getTokenParts('color:background:button')
 * // =>
 * // {
 * //   category: 'color',
 * //   modifier: 'default',
 * //   name: 'button',
 * //   property: 'background',
 * // }
 *
 * getTokenParts('color:background:button:hover')
 * // =>
 * // {
 * //   category: 'color',
 * //   modifier: 'hover',
 * //   name: 'button',
 * //   property: 'background',
 * // }
 */
export const getTokenParts = (tokenName) => {
  if (!isTokenName(tokenName)) {
    throw new TypeError(
      `Invalid param "tokenName" supplied (${tokenName}), expected a valid Synth token name.`,
    )
  }

  if (isGlobalToken(tokenName)) {
    return {
      category: TOKEN_CATEGORY_GLOBAL,
      modifier: 'default',
      name: tokenName.replace('@', ''),
      property: '',
    }
  }

  const [category, property, name, modifier = 'default'] = tokenName.split(':')

  return {
    category,
    modifier,
    name,
    property,
  }
}
