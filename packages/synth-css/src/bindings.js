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
  border: (tokens, tokenName) => {
    const borderWidth = lengthBindings.borderWidth(tokens, tokenName)
    const borderStyle = otherBindings.borderStyle(tokens, tokenName)
    const borderColor = colorBindings.borderColor(tokens, tokenName)

    const CSSDeclaration = new String(`
        ${borderWidth}
        ${borderStyle}
        ${borderColor}
      `)

    Object.defineProperty(CSSDeclaration, 'toJSON', {
      value: () => ({
        ...borderWidth.toJSON(),
        ...borderStyle.toJSON(),
        ...borderColor.toJSON(),
      }),
    })

    return CSSDeclaration
  },
  boxShadow: (tokens, tokenName) => {
    const boxShadow = toArray(tokenName).reduce(
      (declarations, tokenName, index) => {
        const declaration = [
          getTokenValue(tokens, `position:shadow:${tokenName}`),
          getTokenValue(tokens, `size:shadow:${tokenName}`),
          getTokenValue(tokens, `color:shadow:${tokenName}`),
        ].join(' ')

        return index === 0 ? declaration : `${declarations}, ${declaration}`
      },
      '',
    )

    const CSSDeclaration = new String(`box-shadow: ${boxShadow};`)

    Object.defineProperty(CSSDeclaration, 'toJSON', {
      value: () => ({ boxShadow }),
    })

    return CSSDeclaration
  },
}

export default bindings
