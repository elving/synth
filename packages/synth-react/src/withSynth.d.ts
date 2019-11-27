import * as React from 'react'
import { SynthConsumerProps } from './SynthContext'

interface SynthComponentProps {
  [key: string]: any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  ref?: React.Ref<any>
  synth?: SynthConsumerProps
  className?: string
}

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
declare function withSynth<Props extends {}>(
  Component: React.ComponentType<Props>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props & SynthComponentProps> & React.RefAttributes<any>
>

export { SynthComponentProps }
export default withSynth
