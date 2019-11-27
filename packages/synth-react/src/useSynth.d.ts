import * as React from 'react'
import { SynthConsumerProps } from './SynthContext'

/**
 * React hook that will return all the synth tokens and helper functions.
 * @since 1.2.0
 * @example
 * const Button ({ label }) => {
 *   const synth = useSynth()
 *
 *   return (
 *     <button
 *       style={{ padding: synth.padding('primary_button') }}
 *     >
 *       {label}
 *     </button>
 *   )
 * }
 *
 * export default Button
 */
declare function useSynth(): SynthConsumerProps

export default useSynth
