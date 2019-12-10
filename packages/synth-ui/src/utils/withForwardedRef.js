import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const withForwardedRef = (Component) => {
  const ForwardedRefComponent = forwardRef((props, ref) => (
    <Component {...props} forwardedRef={ref} />
  ))

  /**
   * The name of the given `Component` used to pass it down to the wrapped
   * component. Using the `withForwardedRef` prefix for the wrapped component's
   * name will make it easy to identify `withForwardedRef` components on the React
   * dev tools.
   */
  const displayName =
    Component.displayName || Component.name || 'ForwardedRefComponent'

  ForwardedRefComponent.displayName = `withForwardedRef(${displayName})`

  /**
   * Pass on the original component's propTypes.
   */
  ForwardedRefComponent.propTypes = {
    ...Component.propTypes,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType }),
    ]),
  }

  /**
   * Pass on the original component's defaultProps.
   */
  ForwardedRefComponent.defaultProps = Component.defaultProps

  /**
   * Return the enhanced component
   */
  return ForwardedRefComponent
}

export default withForwardedRef
