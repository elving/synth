import { isNumeric } from '@beatgig/is'

import { BOX_PROPERTIES } from '../constants'

/**
 * Will set css rules based on the current component's props.
 * @returns {<T>(props: T & import('@beatgig/synth-react').BoxProps & import('@beatgig/synth-react').SynthComponentProps) => string}
 */
const setBoxProperties = () => ({ synth, withoutDefaults, ...props }) => {
  const boxProps = BOX_PROPERTIES.map((boxProperty) => {
    const prop = props[boxProperty]
    const value = prop ? synth[boxProperty](prop) : ''

    return value && !value.toJSON()[boxProperty]
      ? value.replace(';', `${isNumeric(prop) ? `${prop}px` : prop};`)
      : value
  }).join(' ')

  const defaultProps = withoutDefaults
    ? ''
    : BOX_PROPERTIES.map((boxProperty) => synth[boxProperty]()).join(' ')

  return `
    ${defaultProps}
    ${boxProps}
  `
}

export default setBoxProperties
