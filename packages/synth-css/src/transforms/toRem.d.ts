import * as SynthCore from '@beatgig/synth-core'

/**
 * @description Transforms the given rgba value to a hexadecimal value.
 * @since 2.0.0
 * @example <caption>Transforming a pixel value to a rem value</caption>
 * toRem({
 *   size: {
 *     text: {
 *       base: 18,
 *       sm: 13,
 *     },
 *   },
 * }, 13) => '0.722rem'
 */
declare function toRem(
  tokens: SynthCore.SynthTokenConfiguration,
  tokenValue: SynthCore.SynthTokenValue,
): string

export default toRem
