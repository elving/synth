import * as SynthCore from '@beatgig/synth-core'

type DeclarationJSON<T extends string> = {
  [key in T]: string
}

export interface ColorCSSDeclaration<T extends string> extends String {
  hex(): string
  rgba(alpha: number): string
  toJSON(): DeclarationJSON<T> & {
    hex(): DeclarationJSON<T>
    rgba(alpha: number): DeclarationJSON<T>
  }
}

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
  backgroundColor: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['color']['background'],
  ) => ColorCSSDeclaration<'backgroundColor'>
  borderColor: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['color']['border'],
  ) => ColorCSSDeclaration<'borderColor'>
  color: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['color']['text'],
  ) => ColorCSSDeclaration<'color'>
}

interface LengthCSSDeclaration<T extends string> {
  em(relativeTo: string): string
  rem(): string
  toJSON(): DeclarationJSON<T> & {
    em(relativeTo: string): DeclarationJSON<T>
    rem(): DeclarationJSON<T>
  }
}

interface LengthCSSBindings {
  borderRadius: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['radius'],
  ) => LengthCSSDeclaration<'borderRadius'>
  borderWidth: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['border'],
  ) => LengthCSSDeclaration<'borderWidth'>
  bottom: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['bottom'],
  ) => LengthCSSDeclaration<'bottom'>
  fontSize: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['text'],
  ) => LengthCSSDeclaration<'fontSize'>
  height: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['height'],
  ) => LengthCSSDeclaration<'height'>
  left: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['left'],
  ) => LengthCSSDeclaration<'left'>
  letterSpacing: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['spacing'],
  ) => LengthCSSDeclaration<'letterSpacing'>
  margin: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'margin'>
  marginBottom: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginBottom'>
  marginLeft: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginLeft'>
  marginRight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginRight'>
  marginTop: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginTop'>
  maxHeight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['maxHeight'],
  ) => LengthCSSDeclaration<'maxHeight'>
  maxWidth: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['maxWidth'],
  ) => LengthCSSDeclaration<'maxWidth'>
  minHeight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['minHeight'],
  ) => LengthCSSDeclaration<'minHeight'>
  minWidth: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['minWidth'],
  ) => LengthCSSDeclaration<'minWidth'>
  padding: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'padding'>
  paddingBottom: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingBottom'>
  paddingLeft: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingLeft'>
  paddingRight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingRight'>
  paddingTop: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingTop'>
  right: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['right'],
  ) => LengthCSSDeclaration<'right'>
  top: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['top'],
  ) => LengthCSSDeclaration<'top'>
  width: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['size']['width'],
  ) => LengthCSSDeclaration<'width'>
}

export interface CSSDeclaration<T extends string> extends String {
  toJSON(): DeclarationJSON<T>
}

export type CSSBinding<T extends string> = (
  tokens: SynthCore.SynthTokenConfiguration,
  tokenName: string,
) => CSSDeclaration<T>

export interface CSSBindings {
  animationDelay: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['delay'],
  ) => CSSDeclaration<'animationDelay'>
  animationDuration: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['duration'],
  ) => CSSDeclaration<'animationDuration'>
  animationTimingFunction: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['effect'],
  ) => CSSDeclaration<'animationTimingFunction'>
  borderStyle: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['style']['border'],
  ) => CSSDeclaration<'borderStyle'>
  fontFamily: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['font'],
  ) => CSSDeclaration<'fontFamily'>
  fontStyle: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['style']['text'],
  ) => CSSDeclaration<'fontStyle'>
  fontWeight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['weight'],
  ) => CSSDeclaration<'fontWeight'>
  lineHeight: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['lineHeight'],
  ) => CSSDeclaration<'lineHeight'>
  textAlign: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['text'],
  ) => CSSDeclaration<'textAlign'>
  textDecoration: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['decoration'],
  ) => CSSDeclaration<'textDecoration'>
  textTransform: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['typography']['transform'],
  ) => CSSDeclaration<'textTransform'>
  transitionDelay: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['delay'],
  ) => CSSDeclaration<'transitionDelay'>
  transitionDuration: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['duration'],
  ) => CSSDeclaration<'transitionDuration'>
  transitionTimingFunction: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['motion']['effect'],
  ) => CSSDeclaration<'transitionTimingFunction'>
  zIndex: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['position']['index'],
  ) => CSSDeclaration<'zIndex'>
}

export interface Bindings
  extends CSSBindings,
    LengthCSSBindings,
    ColorCSSBindings {
  border: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName:
      | keyof C['color']['border']
      | keyof C['size']['border']
      | keyof C['style']['border'],
  ) => CSSDeclaration<'borderWidth' | 'borderStyle' | 'borderColor'>
  boxShadow<C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName:
      | keyof C['color']['shadow']
      | keyof C['size']['shadow']
      | keyof C['position']['shadow']
      | [
          | keyof C['color']['shadow']
          | keyof C['size']['shadow']
          | keyof C['position']['shadow'],
        ],
  ): CSSDeclaration<'boxShadow'>
}

declare const bindings: Bindings
declare const ALL_BINDINGS: object

export { ALL_BINDINGS }
export default bindings
