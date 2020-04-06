import { isString, isObject } from '@beatgig/is'

import getToken from './getToken'
import getTokenAliasValue from './getTokenAliasValue'
import getTokenStructure from './getTokenStructure'
import isValidAliasName from './isValidAliasName'

const defaultTransform = (value) => value

const getTokenValue = (tokens, token, transform = defaultTransform) => {
  const { category } = getTokenStructure(token)
  const tokenContent = getToken(tokens, token)
  const tokenValue =
    /** @type {import('@beatgig/synth-core').SynthTokenMetadata} */ (tokenContent)
      ?.value ?? tokenContent

  if (isString(tokenValue)) {
    return transform(
      /** @type {string} */ (tokenValue).replace(
        /@[^\s]+/gim,
        /**
         * @param {string} alias
         * @returns {string}
         */
        (alias) =>
          /** @type {string} */ (getTokenAliasValue(tokens, category, alias)),
      ),
    )
  } else if (Array.isArray(tokenValue)) {
    return /** @type {array} */ (tokenValue).map(
      /**
       * @param {number|string} value
       * @returns {*}
       */
      (value) =>
        transform(
          isValidAliasName(value)
            ? getTokenAliasValue(
                tokens,
                category,
                /** @type {string} */ (value),
              )
            : value,
        ),
    )
  } else {
    return transform(tokenValue)
  }
}

export default getTokenValue
