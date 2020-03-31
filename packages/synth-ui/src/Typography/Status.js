import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Text from './Text'

const Status = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').StatusProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', ...props }, ref) => (
    <Text
      {...props}
      className={className}
      color="status"
      ref={ref}
      fontSize="status"
      textTransform="status"
      fontWeight="status"
    >
      {children}
    </Text>
  ),
)

Status.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the Status component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Status.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
}

Status.displayName = 'Status'

export default Status
