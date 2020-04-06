import * as SynthCore from '@beatgig/synth-core'

/**
 * @description Transforms the given rgba value to a hexadecimal value.
 * @since 2.0.0
 * @example <caption>Transforming a pixel value to a rem value</caption>
 * toEm({
 *   size: {
 *     text: {
 *       base: 18,
 *       sm: 13,
 *     },
 *   },
 * }, 13) => '0.722rem'
 */
declare function toEm(
  tokens: SynthCore.SynthTokenConfiguration,
  tokenValue: SynthCore.SynthTokenValue,
  relativeTo: string,
): string

export default toEm
