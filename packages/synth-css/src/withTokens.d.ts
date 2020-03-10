import * as SynthCore from '@beatgig/synth-core'

import { CamelCaseMap } from './getPropertyToTokenMap'

type SynthCSSBindings = {
  [key in keyof CamelCaseMap]: (tokenName?: string) => string
}

type SynthCSSBindingsWithTokens = {
  [key in keyof CamelCaseMap]: (
    tokenName?: string,
  ) => (tokens: SynthCore.SynthTokenConfiguration, tokenName: string) => string
}

/**
 * Returns an object containing all CSS helper functions with the given
 * `tokens` already passed as the first argument.
 * @since 1.0.0
 * @example
 * const cssHelpers = withTokens({
 *   color: {
 *     background: {
 *       button: 'red',
 *     },
 *   },
 * })
 * cssHelpers.backgroundColor('button')
 *
 * // => background-color: 'red';
 */
declare function withTokens(
  tokens: SynthCore.SynthTokenConfiguration,
): SynthCSSBindingsWithTokens

export { SynthCSSBindings, SynthCSSBindingsWithTokens }
export default withTokens
