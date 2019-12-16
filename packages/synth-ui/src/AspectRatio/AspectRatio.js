import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Box } from '@beatgig/synth-react'

import { styleProp } from '../utils'

/**
 * @type {import('styled-components').StyledComponent<import('@beatgig/synth-react').BoxComponent, any, import('@beatgig/synth-ui').AspectRatioProps, never>}
 */
const StyledAspectRatio = styled(Box)`
  position: relative;

  ::before {
    content: '';
    display: block;
    padding-bottom: calc(100% / (${styleProp('ratio')}));
  }

  > * {
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }

  > img {
    height: auto;
  }
`

const AspectRatio = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').AspectRatioProps} props
   */
  ({ children = null, className = '', ratio = '1/1', ...props }, ref) => (
    <StyledAspectRatio {...props} className={className} ratio={ratio} ref={ref}>
      {children}
    </StyledAspectRatio>
  ),
)

AspectRatio.propTypes = {
  /**
   * The element you want to scale according to the given `ratio` property.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The aspect ratio to be given to the component's `children`.
   */
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

AspectRatio.defaultProps = {
  children: null,
  className: '',
  ratio: '1/1',
}

AspectRatio.displayName = 'AspectRatio'

export default AspectRatio
