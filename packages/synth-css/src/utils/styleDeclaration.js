import { getTokenValue } from '@beatgig/synth-core'

import { toCamelCase } from '../utils'

/**
 * @param {string} tokenPrefix
 * @param {string} property
 * @returns {(tokens: import('@beatgig/synth-core').SynthTokenConfiguration, tokenName?: string) => import('@beatgig/synth-css').CSSDeclaration}
 */
const styleDeclaration = (tokenPrefix, property) => (
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

  Object.defineProperty(CSSDeclaration, 'toJSON', {
    value: () => ({ [toCamelCase(property)]: tokenValue() }),
  })

  return /** @type {import('@beatgig/synth-css').CSSDeclaration} */ (CSSDeclaration)
}

export default styleDeclaration
