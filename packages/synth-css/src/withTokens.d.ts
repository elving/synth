import * as SynthCore from '@beatgig/synth-core'

import { BindingsWithTokens } from './bindings'

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
declare function withTokens<C extends SynthCore.SynthTokenConfiguration>(
  tokens: C,
): {
  [BindingKey in keyof BindingsWithTokens<C>]: <
    B extends BindingsWithTokens<C>[BindingKey]
  >(
    tokenName?: Parameters<B>[1],
  ) => ReturnType<B>
}

export default withTokens
