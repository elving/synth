import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const withForwardedRef = (Component) => {
  const forwardedRefComponent = forwardRef((props, ref) => (
    <Component {...props} ref={ref} />
  ))

  /**
   * Pass on the original component's propTypes.
   */
  forwardedRefComponent.propTypes = {
    ...Component.propTypes,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType }),
    ]),
  }

  /**
   * Pass on the original component's defaultProps.
   */
  forwardedRefComponent.defaultProps = Component.defaultProps

  return forwardedRefComponent
}

export default withForwardedRef
