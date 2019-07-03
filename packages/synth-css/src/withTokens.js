import { isTokenDeclaration } from '@beatgig/synth-core'

import { backgroundColor } from './backgroundColor'
import { border } from './border'
import { borderRadius } from './borderRadius'
import { bottom } from './bottom'
import { boxShadow } from './boxShadow'
import { color } from './color'
import { fontFamily } from './fontFamily'
import { fontSize } from './fontSize'
import { fontWeight } from './fontWeight'
import { height } from './height'
import { left } from './left'
import { letterSpacing } from './letterSpacing'
import { lineHeight } from './lineHeight'
import { margin } from './margin'
import { maxHeight } from './maxHeight'
import { maxWidth } from './maxWidth'
import { minHeight } from './minHeight'
import { minWidth } from './minWidth'
import { opacity } from './opacity'
import { outline } from './outline'
import { padding } from './padding'
import { right } from './right'
import { textDecoration } from './textDecoration'
import { textTransform } from './textTransform'
import { top } from './top'
import { width } from './width'
import { zIndex } from './zIndex'

/**
 * Returns an object containing all CSS helper functions with the given
 * `tokens` already passed as the first argument.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @returns {object}
 * @example
 *
 * const cssHelpers = withTokens({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * })
 *
 * cssHelpers.backgroundColor('button')
 * // => background-color: 'red';
 */
export const withTokens = (tokens) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return {
    backgroundColor:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => backgroundColor(tokens, tokenName),

    border:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => border(tokens, tokenName),

    borderRadius:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => borderRadius(tokens, tokenName),

    bottom:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => bottom(tokens, tokenName),

    boxShadow:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => boxShadow(tokens, tokenName),

    color:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => color(tokens, tokenName),

    fontFamily:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => fontFamily(tokens, tokenName),

    fontSize:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => fontSize(tokens, tokenName),

    fontWeight:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => fontWeight(tokens, tokenName),

    height:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => height(tokens, tokenName),

    left:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => left(tokens, tokenName),

    letterSpacing:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => letterSpacing(tokens, tokenName),

    lineHeight:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => lineHeight(tokens, tokenName),

    margin:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => margin(tokens, tokenName),

    maxHeight:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => maxHeight(tokens, tokenName),

    maxWidth:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => maxWidth(tokens, tokenName),

    minHeight:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => minHeight(tokens, tokenName),

    minWidth:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => minWidth(tokens, tokenName),

    opacity:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => opacity(tokens, tokenName),

    outline:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => outline(tokens, tokenName),

    padding:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => padding(tokens, tokenName),

    right:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => right(tokens, tokenName),

    textDecoration:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => textDecoration(tokens, tokenName),

    textTransform:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => textTransform(tokens, tokenName),

    top:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => top(tokens, tokenName),

    width:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => width(tokens, tokenName),

    zIndex:
      /**
       * @param {string} tokenName
       * @returns {string}
       */
      (tokenName) => zIndex(tokens, tokenName),
  }
}
