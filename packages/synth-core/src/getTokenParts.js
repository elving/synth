import { isTokenName } from './isTokenName'

/**
 * @typedef {object} TokenParts
 * @property {string} category
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
 * // => { category: 'color', name: 'button', property: 'background' }
 *
 * getTokenParts('color:background:button:hover')
 * // => { category: 'color', name: 'button:hover', property: 'background' }
 */
export const getTokenParts = (tokenName) => {
  if (!isTokenName(tokenName)) {
    throw new TypeError(
      'Invalid param `tokenName` supplied, expected a valid Synth token name.',
    )
  }

  if (tokenName.startsWith('@')) {
    return {
      category: '',
      name: tokenName,
      property: '',
    }
  }

  const [category, property, name, modifier] = tokenName.split(':')

  return {
    category,
    name: `${name}${modifier ? `:${modifier}` : ''}`,
    property,
  }
}
