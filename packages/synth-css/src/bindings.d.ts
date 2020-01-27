import * as SynthCore from '@beatgig/synth-core/src'

export interface ColorCSSDeclaration extends String {
  hex: () => string
  rgba: (alpha: number) => string
  toJSON: {
    [key: string]: string
    hex: () => { [key: string]: string }
    rgba: (alpha: number) => { [key: string]: string }
  }
}

export type ColorCSSBinding = (
  tokens: SynthCore.SynthTokenConfiguration,
  tokenName: string,
) => ColorCSSDeclaration

export interface ColorCSSBindings {
  /**
   * @description Returns CSS declaration for the `background-color` property. If no `tokenName` is given, the `color:background:base` token will be used by default.
   * @since 1.0.0
   * @example <caption>Basic usage</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: '#333',
   *     },
   *   },
   * }, 'primaryButton') // => background-color: #333;
   * @example <caption>Default `base` value</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       base: '#111',
   *     },
   *   },
   * }) // => background-color: #111;
   * @example <caption>Retrieving a specific state</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: {
   *         default: '#333',
   *         hover: '#111',
   *       },
   *     },
   *   },
   * }, 'primaryButton:hover') // => background-color: #111;
   * @example <caption>Using the `rgba` transform</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: '#000',
   *     },
   *   },
   * }, 'primaryButton').rgba(0.25) // => background-color: rgba(0, 0, 0, 0.25);
   * @example <caption>Using the `hex` transform</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: 'rgba(0, 0, 0, 1)',
   *     },
   *   },
   * }, 'primaryButton').hex() // => 'background-color: #000;'
   * @example <caption>Using the `toJSON` transform</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: '#333',
   *     },
   *   },
   * }, 'primaryButton').toJSON() // => { backgroundColor: '#000' }
   * @example <caption>Using the `toJSON` and `rgba` transforms</caption>
   * backgroundColor({
   *   color: {
   *     background: {
   *       primaryButton: '#000',
   *     },
   *   },
   * }, 'primaryButton').toJSON().rgba() // => { backgroundColor: 'rgba(0, 0, 0, 1)' }
   */
  backgroundColor: ColorCSSBinding
  borderColor: ColorCSSBinding
  color: ColorCSSBinding
}

export interface LengthCSSDeclaration extends String {
  em: (relativeTo: string) => string
  rem: () => string
  toJSON: {
    [key: string]: string
    em: (relativeTo: string) => { [key: string]: string }
    rem: () => { [key: string]: string }
  }
}

export type LengthCSSBinding = (
  tokens: SynthCore.SynthTokenConfiguration,
  tokenName: string,
) => LengthCSSDeclaration

export interface LengthCSSBindings {
  borderRadius: LengthCSSBinding
  borderWidth: LengthCSSBinding
  bottom: LengthCSSBinding
  fontSize: LengthCSSBinding
  height: LengthCSSBinding
  left: LengthCSSBinding
  letterSpacing: LengthCSSBinding
  margin: LengthCSSBinding
  marginBottom: LengthCSSBinding
  marginLeft: LengthCSSBinding
  marginRight: LengthCSSBinding
  marginTop: LengthCSSBinding
  maxHeight: LengthCSSBinding
  maxWidth: LengthCSSBinding
  minHeight: LengthCSSBinding
  minWidth: LengthCSSBinding
  padding: LengthCSSBinding
  paddingBottom: LengthCSSBinding
  paddingLeft: LengthCSSBinding
  paddingRight: LengthCSSBinding
  paddingTop: LengthCSSBinding
  right: LengthCSSBinding
  textAlign: LengthCSSBinding
  top: LengthCSSBinding
  width: LengthCSSBinding
}

export interface CSSDeclaration extends String {
  toJSON: { [key: string]: string }
}

export type CSSBinding = (
  tokens: SynthCore.SynthTokenConfiguration,
  tokenName: string,
) => CSSDeclaration

export interface CSSBindings {
  animationDelay: CSSBinding
  animationDuration: CSSBinding
  animationTimingFunction: CSSBinding
  borderStyle: CSSBinding
  fontFamily: CSSBinding
  fontStyle: CSSBinding
  fontWeight: CSSBinding
  lineHeight: CSSBinding
  textDecoration: CSSBinding
  textTransform: CSSBinding
  transitionDelay: CSSBinding
  transitionDuration: CSSBinding
  transitionTimingFunction: CSSBinding
  zIndex: CSSBinding
}

export interface Bindings
  extends CSSBindings,
    LengthCSSBindings,
    ColorCSSBindings {
  border: (
    tokens: SynthCore.SynthTokenConfiguration,
    tokenName: string,
  ) => string
  boxShadow: (
    tokens: SynthCore.SynthTokenConfiguration,
    tokenName: string | string[],
  ) => string
}

declare const bindings: Bindings
declare const ALL_BINDINGS: object

export { ALL_BINDINGS }
export default bindings
