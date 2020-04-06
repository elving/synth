import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Text from './Text'

const Small = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SmallProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', ...props }, ref) => (
    <Text
      {...props}
      forwardedAs="small"
      className={className}
      fontSize="small"
      lineHeight="small"
      ref={ref}
    >
      {children}
    </Text>
  ),
)

Small.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the Small component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Small.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
}

Small.displayName = 'Small'

export default Small
