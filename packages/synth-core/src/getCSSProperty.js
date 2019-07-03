import { TOKEN_PROPERTY_CSS_MAP } from './constants'
import { isTokenType } from './isTokenType'

/**
 * Returns a CSS property mapping to the given token.
 *
 * @since 1.0.0
 * @param {string} tokenType - A valid Synth token type, e.g. `color:text`.
 * @returns {string}
 * @example
 *
 * getCSSProperty('color:background')
 * // => "background-color"
 *
 * getCSSProperty('typography:font')
 * // => "font-family"
 */
export const getCSSProperty = (tokenType) => {
  if (!isTokenType(tokenType)) {
    throw new TypeError(
      'Invalid param `tokenType` supplied, expected a valid Synth token type.',
    )
  }

  return TOKEN_PROPERTY_CSS_MAP[tokenType]
}
