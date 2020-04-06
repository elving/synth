import { ALL_BINDINGS } from './constants'
import toCamelCase from './utils/toCamelCase'

/**
 * @param {"snake-case"|"camelCase"} format
 * @returns {object}
 */
const getPropertyToTokenMap = (format = 'snake-case') =>
  format === 'snake-case'
    ? ALL_BINDINGS
    : Object.keys(ALL_BINDINGS).reduce(
        (mapping, property) => ({
          ...mapping,
          [toCamelCase(property)]: ALL_BINDINGS[property],
        }),
        {},
      )

export default getPropertyToTokenMap
