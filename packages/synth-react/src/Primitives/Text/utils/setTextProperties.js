import { TEXT_PROPERTIES } from '../constants'

const PROP_METHOD_MAP = {
  color: 'color',
  decoration: 'textDecoration',
  font: 'fontFamily',
  lineHeight: 'lineHeight',
  size: 'fontSize',
  spacing: 'letterSpacing',
  transform: 'textTransform',
  weight: 'fontWeight',
}

/**
 * Will set css rules based on the current component's props.
 * @returns {<T>(props: T & import('@beatgig/synth-react').TextProps & import('@beatgig/synth-react').SynthComponentProps) => string}
 */
const setTextProperties = () => ({ synth, withoutDefaults, ...props }) => {
  const textProps = TEXT_PROPERTIES.map((textProperty) =>
    props[textProperty]
      ? synth[PROP_METHOD_MAP[textProperty]](props[textProperty])
      : '',
  ).join(' ')

  const defaultProps = withoutDefaults
    ? ''
    : TEXT_PROPERTIES.map((textProperty) =>
        synth[PROP_METHOD_MAP[textProperty]](),
      ).join(' ')

  return `
    ${defaultProps}
    ${textProps}
  `
}

export default setTextProperties
