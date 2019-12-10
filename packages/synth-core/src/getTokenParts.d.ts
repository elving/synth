interface SynthTokenParts {
  category: string
  modifier: string
  name: string
  property: string
}

/**
 * Returns an object containing all the parts of a Synth token.
 * @since 1.0.0
 * @example
 * getTokenParts('color:background:button')
 * // =>
 * // {
 * //   category: 'color',
 * //   modifier: 'default',
 * //   name: 'button',
 * //   property: 'background',
 * // }
 *
 * getTokenParts('color:background:button:hover')
 * // =>
 * // {
 * //   category: 'color',
 * //   modifier: 'hover',
 * //   name: 'button',
 * //   property: 'background',
 * // }
 */
declare function getTokenParts(tokenName: string): SynthTokenParts

export { SynthTokenParts }
export default getTokenParts
