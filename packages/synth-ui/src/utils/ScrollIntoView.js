import PropTypes from 'prop-types'
import React from 'react'

import withForwardedRef from './withForwardedRef'

const ScrollIntoView = ({
  children = null,
  className = '',
  options = {},
  shouldScroll,
}) => (
  <div
    className={className}
    ref={(element) => {
      if (shouldScroll && element) {
        element.scrollIntoView(options)
      }
    }}
  >
    {children}
  </div>
)

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  options: PropTypes.object,
  shouldScroll: PropTypes.bool,
}

export default withForwardedRef(ScrollIntoView)
