import getTokenValue from '../getTokenValue'
import { toCamelCase } from '../utils'
import { toEm, toRem } from '../transforms'

/**
 * @param {string} tokenPrefix
 * @param {string} property
 * @returns {(tokens: import('@beatgig/synth-core').SynthTokenConfiguration, tokenName?: string, relativeTo?: string) => import('@beatgig/synth-css').LengthCSSDeclaration}
 */
const lengthDeclaration = (tokenPrefix, property) => (
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

  Object.defineProperty(CSSDeclaration, 'rem', {
    value: () => CSSProperty(tokenValue((value) => toRem(tokens, value))),
  })

  Object.defineProperty(CSSDeclaration, 'em', {
    value: (relativeTo = 'base') =>
      CSSProperty(tokenValue((value) => toEm(tokens, value, relativeTo))),
  })

  Object.defineProperty(CSSDeclaration, 'toJSON', {
    value: () => {
      const toJSON = {
        [toCamelCase(property)]: tokenValue(),
      }

      Object.defineProperty(toJSON, 'rem', {
        value: () => ({
          [toCamelCase(property)]: tokenValue((value) => toRem(tokens, value)),
        }),
      })

      Object.defineProperty(toJSON, 'em', {
        value: (relativeTo = 'base') => ({
          [toCamelCase(property)]: tokenValue((value) =>
            toEm(tokens, value, relativeTo),
          ),
        }),
      })

      return toJSON
    },
  })

  return /** @type {import('@beatgig/synth-css').LengthCSSDeclaration} */ (CSSDeclaration)
}

export default lengthDeclaration
