import React, { forwardRef } from 'react'

import { SynthConsumer } from './SynthContext'

/**
 * @typedef {object} Props
 */

/**
 * Higher order component that wraps it's children in the `SynthConsumer`
 * so that they have an `synth` prop where the design system values
 * are available.
 *
 * @param {import('react').ComponentType} Component - The component that gets wrapped in SynthConsumer.
 * @returns {import('react').RefForwardingComponent}
 * @example
 *
 * const Component ({ label, synth }) =>
 *  <button
 *    style={{ padding: synth.padding('primary_button') }}
 *  >
 *    {label}
 *  </button>
 *
 * // Exports the `Button` component wrapped in `SynthConsumer`.
 * export const Button = withSynth(Component)
 */
const withSynth = (Component) => {
  /**
   * The higher order component that wraps the given `Component`
   * in `SynthConsumer`.
   *
   * @type {import('react').FunctionComponent<Props>}
   */
  const SynthComponent = forwardRef((props, ref) => (
    <SynthConsumer>
      {(value) => <Component {...props} ref={ref} synth={value} />}
    </SynthConsumer>
  ))

  /**
   * The name of the given `Component` used to pass it down to the wrapped
   * component. Using the `withSynth` prefix for the wrapped component's
   * name will make it easy to identify `Synth` components on the React
   * dev tools.
   *
   * @type {string}
   */
  const displayName =
    Component.displayName || Component.name || 'SynthComponent'

  SynthComponent.displayName = `withSynth(${displayName})`

  return SynthComponent
}

export { withSynth }
