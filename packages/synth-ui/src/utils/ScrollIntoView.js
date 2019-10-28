import React from 'react'

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

export default ScrollIntoView
