import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { SynthConsumer } from './SynthContext'

const withSynth = (Component) => {
  /**
   * The higher order component that wraps the given `Component`
   * in `SynthConsumer`.
   */
  const SynthComponent = forwardRef((props, ref) => (
    <SynthConsumer>
      {(value) => <Component {...props} ref={ref} synth={value} />}
    </SynthConsumer>
  ))

  /**
   * The name of the given `Component` used to pass it down to the wrapped
   * component. Using the `withSynth` prefix for the wrapped component's
   * name will make it easy to identify `withSynth` components on the React
   * dev tools.
   */
  const displayName =
    Component.displayName || Component.name || 'SynthComponent'

  SynthComponent.displayName = `withSynth(${displayName})`

  /**
   * Pass on the original component's propTypes and include a new one for the
   * `synth` prop.
   */
  SynthComponent.propTypes = {
    ...Component.propTypes,
    synth: PropTypes.shape({
      getUnit: PropTypes.func,
      getValue: PropTypes.func,
      tokens: PropTypes.shape({
        color: PropTypes.shape({
          background: PropTypes.object,
          border: PropTypes.object,
          outline: PropTypes.object,
          text: PropTypes.object,
        }),
        global: PropTypes.object,
        position: PropTypes.shape({
          bottom: PropTypes.object,
          index: PropTypes.object,
          left: PropTypes.object,
          right: PropTypes.object,
          top: PropTypes.object,
        }),
        size: PropTypes.shape({
          border: PropTypes.object,
          height: PropTypes.object,
          maxHeight: PropTypes.object,
          maxWidth: PropTypes.object,
          minHeight: PropTypes.object,
          minWidth: PropTypes.object,
          outline: PropTypes.object,
          radius: PropTypes.object,
          width: PropTypes.object,
        }),
        space: PropTypes.shape({
          margin: PropTypes.object,
          outline: PropTypes.object,
          padding: PropTypes.object,
        }),
        style: PropTypes.shape({
          border: PropTypes.object,
          opacity: PropTypes.object,
          shadow: PropTypes.object,
          outline: PropTypes.object,
        }),
        typography: PropTypes.shape({
          decoration: PropTypes.object,
          font: PropTypes.object,
          lineHeight: PropTypes.object,
          size: PropTypes.object,
          spacing: PropTypes.object,
          transform: PropTypes.object,
          weight: PropTypes.object,
        }),
      }),
    }),
  }

  /**
   * Pass on the original component's defaultProps.
   */
  SynthComponent.defaultProps = Component.defaultProps

  /**
   * Return the enhanced component
   */
  return SynthComponent
}

export default withSynth
