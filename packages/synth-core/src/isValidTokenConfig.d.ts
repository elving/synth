import { SynthTokenConfiguration } from './'

/**
 * @since 2.0.0
 * @description Validates the given value to see if it's a valid Synth token configuration.
 * @example
 * isValidTokenConfig({ color: { text: { button: '#232323' } } }) => true
 * isValidTokenConfig({ color: { lol: { button: '#232323' } } }) => false
 */
declare function isValidTokenConfig(tokens: SynthTokenConfiguration): boolean

export default isValidTokenConfig
