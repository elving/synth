import { getTokenValue } from '@beatgig/synth-core'

import { toCamelCase } from '../utils'
import { toHex, toRgba } from '../transforms'

/**
 * @param {string} tokenPrefix
 * @param {string} property
 * @returns {(tokens: import('@beatgig/synth-core').SynthTokenConfiguration, tokenName?: string) => import('@beatgig/synth-css').ColorCSSDeclaration}
 */
const colorDeclaration = (tokenPrefix, property) => (
  tokens,
  tokenName = 'base',
) => {
  /**
   * @param {() => *} [transform]
   * @returns {import('@beatgig/synth-core').SynthTokenValue}
   */
  const tokenValue = (transform) =>
    getTokenValue(tokens, `${tokenPrefix}:${tokenName}`, transform)

  /**
   * @template T
   * @param {T} value
   * @returns {string}
   */
  const CSSProperty = (value) => `${property}: ${value};`

  const CSSDeclaration = new String(CSSProperty(tokenValue()))

  Object.defineProperty(CSSDeclaration, 'rgba', {
    value: (alpha = 1) =>
      CSSProperty(tokenValue((value) => toRgba(value, alpha))),
  })

  Object.defineProperty(CSSDeclaration, 'hex', {
    value: () => CSSProperty(tokenValue((value) => toHex(value))),
  })

  Object.defineProperty(CSSDeclaration, 'toJSON', {
    value: () => {
      const toJSON = { [toCamelCase(property)]: tokenValue() }

      Object.defineProperty(toJSON, 'hex', {
        value: () => ({
          [toCamelCase(property)]: tokenValue((value) => toHex(value)),
        }),
      })

      Object.defineProperty(toJSON, 'rgba', {
        value: (alpha = 1) => ({
          [toCamelCase(property)]: tokenValue((value) => toRgba(value, alpha)),
        }),
      })

      return toJSON
    },
  })

  return /** @type {import('@beatgig/synth-css').ColorCSSDeclaration} */ (CSSDeclaration)
}

export default colorDeclaration
