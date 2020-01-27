import { isNumeric } from '@beatgig/is'
import { toArray } from '@beatgig/array'

import getTokenValue from './getTokenValue'

import {
  colorDeclaration,
  lengthDeclaration,
  styleDeclaration,
  toCamelCase,
} from './utils'

import {
  BINDINGS_MAP,
  COLOR_BINDINGS_MAP,
  LENGTH_BINDINGS_MAP,
} from './constants'

const colorBindings = /** @type {import('@beatgig/synth-css').ColorCSSBindings} */ (Object.keys(
  COLOR_BINDINGS_MAP,
).reduce(
  /**
   * @param {object} bindings
   * @param {string} property
   * @returns {object}
   */
  (bindings, property) => ({
    ...bindings,
    [toCamelCase(property)]: colorDeclaration(
      COLOR_BINDINGS_MAP[property],
      property,
    ),
  }),
  {},
))

const lengthBindings = /** @type {import('@beatgig/synth-css').LengthCSSBindings} */ (Object.keys(
  LENGTH_BINDINGS_MAP,
).reduce(
  /**
   * @param {object} bindings
   * @param {string} property
   * @returns {object}
   */
  (bindings, property) => ({
    ...bindings,
    [toCamelCase(property)]: lengthDeclaration(
      LENGTH_BINDINGS_MAP[property],
      property,
    ),
  }),
  {},
))

const otherBindings = /** @type {import('@beatgig/synth-css').CSSBindings} */ (Object.keys(
  BINDINGS_MAP,
).reduce(
  /**
   * @param {object} bindings
   * @param {string} property
   * @returns {object}
   */
  (bindings, property) => ({
    ...bindings,
    [toCamelCase(property)]: styleDeclaration(BINDINGS_MAP[property], property),
  }),
  {},
))

/**
 * @type {import('@beatgig/synth-css').Bindings}
 */
const bindings = {
  ...colorBindings,
  ...lengthBindings,
  ...otherBindings,
  border:
    /**
     * @param {import('@beatgig/synth-core').SynthTokenConfiguration} tokens
     * @param {string} tokenName
     * @returns {string}
     */
    (tokens, tokenName) => `
      ${lengthBindings.borderWidth(tokens, tokenName)}
      ${otherBindings.borderStyle(tokens, tokenName)}
      ${colorBindings.borderColor(tokens, tokenName)}
    `,
  boxShadow:
    /**
     * @param {import('@beatgig/synth-core').SynthTokenConfiguration} tokens
     * @param {string} tokenName
     * @returns {string}
     */
    (tokens, tokenName) =>
      toArray(tokenName)
        .map(
          (value) =>
            `box-shadow: ${[
              getTokenValue(tokens, `position:shadow:${value}`),
              getTokenValue(tokens, `size:shadow:${value}`),
              getTokenValue(tokens, `color:shadow:${value}`),
            ].join(' ')};`,
        )
        .join(','),
}

export default bindings
