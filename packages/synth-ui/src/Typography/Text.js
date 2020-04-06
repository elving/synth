import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { Box } from '@beatgig/synth-react'

const Text = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').TextProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', ...props }, ref) => (
    <Box
      as="span"
      className={className}
      color="base"
      fontFamily="base"
      fontSize="base"
      fontWeight="base"
      lineHeight="base"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  ),
)

Text.propTypes = {
  ...Box.propTypes,
  /**
   * The elements you want to display within the Text component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Text.defaultProps = {
  ...Box.defaultProps,
  children: null,
  className: '',
}

Text.displayName = 'Text'

export default Text
