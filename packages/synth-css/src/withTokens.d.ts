import { SynthTokenDeclaration } from '@beatgig/synth-core'

interface SynthCSSBindings {
  backgroundColor(tokenName?: string): string
  border(tokenName?: string): string
  borderRadius(tokenName?: string): string
  bottom(tokenName?: string): string
  boxShadow(tokenName?: string): string
  color(tokenName?: string): string
  fontFamily(tokenName?: string): string
  fontSize(tokenName?: string): string
  fontWeight(tokenName?: string): string
  height(tokenName?: string): string
  left(tokenName?: string): string
  letterSpacing(tokenName?: string): string
  lineHeight(tokenName?: string): string
  margin(tokenName?: string): string
  maxHeight(tokenName?: string): string
  maxWidth(tokenName?: string): string
  minHeight(tokenName?: string): string
  minWidth(tokenName?: string): string
  opacity(tokenName?: string): string
  outline(tokenName?: string): string
  padding(tokenName?: string): string
  right(tokenName?: string): string
  textDecoration(tokenName?: string): string
  textTransform(tokenName?: string): string
  top(tokenName?: string): string
  width(tokenName?: string): string
  zIndex(tokenName?: string): string
}

/**
 * Returns an object containing all CSS helper functions with the given
 * `tokens` already passed as the first argument.
 * @since 1.0.0
 * @example
 * import { withTokens } from '@beatgig/synth-css'
 *
 * const cssHelpers = withTokens({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * })
 *
 * cssHelpers.backgroundColor('button')
 * // => background-color: 'red';
 */
declare function withTokens(tokens: SynthTokenDeclaration): SynthCSSBindings

export { SynthCSSBindings }
export default withTokens
