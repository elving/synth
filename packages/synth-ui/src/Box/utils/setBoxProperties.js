import { BOX_PROPERTIES } from '../constants'

/**
 * Will set css rules based on the current component's props.
 * @returns {<T>(props: T & import('@beatgig/synth-ui').BoxProps & import('@beatgig/synth-react').SynthComponentProps) => string}
 */
const setBoxProperties = () => ({ synth, ...props }) =>
  BOX_PROPERTIES.map((boxProperty) =>
    props[boxProperty] ? synth[boxProperty](props[boxProperty]) : '',
  ).join(' ')

export default setBoxProperties
