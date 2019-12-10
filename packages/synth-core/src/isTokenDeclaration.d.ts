interface SynthTokenDeclaration {
  color?: {
    background?: {}
    border?: {}
    outline?: {}
    text?: {}
  }
  global?: {}
  position?: {
    bottom?: {}
    index?: {}
    left?: {}
    right?: {}
    top?: {}
  }
  size?: {
    border?: {}
    height?: {}
    maxHeight?: {}
    maxWidth?: {}
    minHeight?: {}
    minWidth?: {}
    outline?: {}
    radius?: {}
    width?: {}
  }
  space?: {
    margin?: {}
    outline?: {}
    padding?: {}
  }
  style?: {
    border?: {}
    opacity?: {}
    shadow?: {}
    outline?: {}
  }
  typography?: {
    decoration?: {}
    font?: {}
    lineHeight?: {}
    size?: {}
    spacing?: {}
    transform?: {}
    weight?: {}
  }
}

/**
 * Validates that the given value is a valid Synth token declaration.
 * @since 1.0.0
 * @example
 * isTokenDeclaration({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * })
 * // => true
 *
 * isTokenDeclaration('size:maxWidth')
 * // => false
 *
 * isTokenDeclaration({})
 * // => false
 *
 * isTokenDeclaration({ size: { nope: 1 } })
 * // => false
 */
declare function isTokenDeclaration(tokens: SynthTokenDeclaration): boolean

export { SynthTokenDeclaration }
export default isTokenDeclaration
