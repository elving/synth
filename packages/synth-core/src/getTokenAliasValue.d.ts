import { SynthCategory, SynthTokenConfiguration, SynthTokenValue } from './'

/**
 * @since 2.0.0
 * @description Gets the value form the given token alias.
 * @example
 * getTokenAliasValue({
 *   space: {
 *     aliases: {
 *       md: 12
 *     }
 *   }
 * }, 'space', '@md') => 12
 *
 * getTokenAliasValue({
 *   space: {
 *     aliases: {
 *       content: [12, 22, 32]
 *     }
 *   }
 * }, 'space', '@content.2') => 22
 */
declare function getTokenAliasValue(
  tokens: SynthTokenConfiguration,
  category: SynthCategory,
  alias: string,
): SynthTokenValue

export default getTokenAliasValue
