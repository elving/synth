import * as React from 'react'
import { SynthConsumerProps } from './SynthContext'

interface SynthComponentProps {
  synth?: SynthConsumerProps
}

type SynthComponent<Props = {}, Ref = any> = React.ForwardRefExoticComponent<
  SynthComponentProps & Props & React.RefAttributes<Ref>
>

/**
 * Higher order component that wraps it's children in the `SynthConsumer`
 * so that they have an `synth` prop where the design system values
 * are available.
 * @since 1.0.0
 * @example
 * const Button ({ label, synth }) =>
 *  <button
 *    style={{ padding: synth.padding('primary_button') }}
 *  >
 *    {label}
 *  </button>
 *
 * // Exports the `Button` component wrapped in `SynthConsumer`.
 * export default withSynth(Button)
 */
declare function withSynth<P = {}>(
  Component: React.ComponentType<P>,
): SynthComponent<P>

export { SynthComponent, SynthComponentProps }
export default withSynth
