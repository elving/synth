import { isNil } from '@beatgig/is'

import { POSITIONAL_ALIGNMENT } from '../constants'

/**
 * @typedef {object} Props
 * @property {boolean} center
 * @property {boolean} full
 * @property {boolean} fullHeight
 * @property {boolean} fullWidth
 */

/**
 * Will set css rules based on the current component's props.
 * @param {string} propName
 * @param {string} [cssPropName]
 * @returns {<T>(props: T & Props) => string}
 */
const setProperty = (propName, cssPropName) => (props) => {
  const propValue = props[propName]

  /**
   * The `center` prop will override any positional alignment property.
   * @see {@link https://www.w3.org/TR/css-align-3/#positional-values}
   */
  if (props.center && POSITIONAL_ALIGNMENT.includes(propValue)) {
    return ''
  }

  /**
   * The `full`, `fullWidth`, `fullHeight` props override the `basis` prop.
   */
  if (
    propName === 'basis' &&
    (props.full || props.fullWidth || props.fullHeight)
  ) {
    return ''
  }

  return !isNil(propValue) ? `${cssPropName || propName}: ${propValue};` : ''
}

export default setProperty
