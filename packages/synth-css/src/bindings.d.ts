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

export interface LengthCSSDeclaration<T extends string> {
  em(relativeTo: string): string
  rem(): string
  toJSON(): DeclarationJSON<T> & {
    em(relativeTo: string): DeclarationJSON<T>
    rem(): DeclarationJSON<T>
  }
}

export interface LengthCSSBindings {
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
  opacity: <C extends SynthCore.SynthTokenConfiguration>(
    tokens: C,
    tokenName: keyof C['style']['opacity'],
  ) => CSSDeclaration<'opacity'>
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
  boxShadow: <C extends SynthCore.SynthTokenConfiguration>(
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
  ) => CSSDeclaration<'boxShadow'>
}

export interface ColorCSSBindingsWithTokens<
  C extends SynthCore.SynthTokenConfiguration
> {
  backgroundColor: (
    tokens: C,
    tokenName: keyof C['color']['background'],
  ) => ColorCSSDeclaration<'backgroundColor'>
  borderColor: (
    tokens: C,
    tokenName: keyof C['color']['border'],
  ) => ColorCSSDeclaration<'borderColor'>
  color: (
    tokens: C,
    tokenName: keyof C['color']['text'],
  ) => ColorCSSDeclaration<'color'>
}

export interface LengthCSSBindingsWithTokens<
  C extends SynthCore.SynthTokenConfiguration
> {
  borderRadius: (
    tokens: C,
    tokenName: keyof C['size']['radius'],
  ) => LengthCSSDeclaration<'borderRadius'>
  borderWidth: (
    tokens: C,
    tokenName: keyof C['size']['border'],
  ) => LengthCSSDeclaration<'borderWidth'>
  bottom: (
    tokens: C,
    tokenName: keyof C['position']['bottom'],
  ) => LengthCSSDeclaration<'bottom'>
  fontSize: (
    tokens: C,
    tokenName: keyof C['size']['text'],
  ) => LengthCSSDeclaration<'fontSize'>
  height: (
    tokens: C,
    tokenName: keyof C['size']['height'],
  ) => LengthCSSDeclaration<'height'>
  left: (
    tokens: C,
    tokenName: keyof C['position']['left'],
  ) => LengthCSSDeclaration<'left'>
  letterSpacing: (
    tokens: C,
    tokenName: keyof C['typography']['spacing'],
  ) => LengthCSSDeclaration<'letterSpacing'>
  margin: (
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'margin'>
  marginBottom: (
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginBottom'>
  marginLeft: (
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginLeft'>
  marginRight: (
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginRight'>
  marginTop: (
    tokens: C,
    tokenName: keyof C['space']['margin'],
  ) => LengthCSSDeclaration<'marginTop'>
  maxHeight: (
    tokens: C,
    tokenName: keyof C['size']['maxHeight'],
  ) => LengthCSSDeclaration<'maxHeight'>
  maxWidth: (
    tokens: C,
    tokenName: keyof C['size']['maxWidth'],
  ) => LengthCSSDeclaration<'maxWidth'>
  minHeight: (
    tokens: C,
    tokenName: keyof C['size']['minHeight'],
  ) => LengthCSSDeclaration<'minHeight'>
  minWidth: (
    tokens: C,
    tokenName: keyof C['size']['minWidth'],
  ) => LengthCSSDeclaration<'minWidth'>
  padding: (
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'padding'>
  paddingBottom: (
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingBottom'>
  paddingLeft: (
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingLeft'>
  paddingRight: (
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingRight'>
  paddingTop: (
    tokens: C,
    tokenName: keyof C['space']['padding'],
  ) => LengthCSSDeclaration<'paddingTop'>
  right: (
    tokens: C,
    tokenName: keyof C['position']['right'],
  ) => LengthCSSDeclaration<'right'>
  top: (
    tokens: C,
    tokenName: keyof C['position']['top'],
  ) => LengthCSSDeclaration<'top'>
  width: (
    tokens: C,
    tokenName: keyof C['size']['width'],
  ) => LengthCSSDeclaration<'width'>
}

export interface CSSBindingsWithTokens<
  C extends SynthCore.SynthTokenConfiguration
> {
  animationDelay: (
    tokens: C,
    tokenName: keyof C['motion']['delay'],
  ) => CSSDeclaration<'animationDelay'>
  animationDuration: (
    tokens: C,
    tokenName: keyof C['motion']['duration'],
  ) => CSSDeclaration<'animationDuration'>
  animationTimingFunction: (
    tokens: C,
    tokenName: keyof C['motion']['effect'],
  ) => CSSDeclaration<'animationTimingFunction'>
  borderStyle: (
    tokens: C,
    tokenName: keyof C['style']['border'],
  ) => CSSDeclaration<'borderStyle'>
  fontFamily: (
    tokens: C,
    tokenName: keyof C['typography']['font'],
  ) => CSSDeclaration<'fontFamily'>
  fontStyle: (
    tokens: C,
    tokenName: keyof C['style']['text'],
  ) => CSSDeclaration<'fontStyle'>
  fontWeight: (
    tokens: C,
    tokenName: keyof C['typography']['weight'],
  ) => CSSDeclaration<'fontWeight'>
  lineHeight: (
    tokens: C,
    tokenName: keyof C['typography']['lineHeight'],
  ) => CSSDeclaration<'lineHeight'>
  textAlign: (
    tokens: C,
    tokenName: keyof C['position']['text'],
  ) => CSSDeclaration<'textAlign'>
  textDecoration: (
    tokens: C,
    tokenName: keyof C['typography']['decoration'],
  ) => CSSDeclaration<'textDecoration'>
  textTransform: (
    tokens: C,
    tokenName: keyof C['typography']['transform'],
  ) => CSSDeclaration<'textTransform'>
  transitionDelay: (
    tokens: C,
    tokenName: keyof C['motion']['delay'],
  ) => CSSDeclaration<'transitionDelay'>
  transitionDuration: (
    tokens: C,
    tokenName: keyof C['motion']['duration'],
  ) => CSSDeclaration<'transitionDuration'>
  transitionTimingFunction: (
    tokens: C,
    tokenName: keyof C['motion']['effect'],
  ) => CSSDeclaration<'transitionTimingFunction'>
  zIndex: (
    tokens: C,
    tokenName: keyof C['position']['index'],
  ) => CSSDeclaration<'zIndex'>
}

export interface BindingsWithTokens<
  C extends SynthCore.SynthTokenConfiguration
>
  extends CSSBindingsWithTokens<C>,
    LengthCSSBindingsWithTokens<C>,
    ColorCSSBindingsWithTokens<C> {
  border: (
    tokens: C,
    tokenName:
      | keyof C['color']['border']
      | keyof C['size']['border']
      | keyof C['style']['border'],
  ) => CSSDeclaration<'borderWidth' | 'borderStyle' | 'borderColor'>
  boxShadow: (
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
  ) => CSSDeclaration<'boxShadow'>
}

declare const bindings: Bindings
declare const ALL_BINDINGS: object

export { ALL_BINDINGS }
export default bindings
