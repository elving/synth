import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { AspectRatio } from '../AspectRatio'

import { setBackgroundColor } from './utils'
import { styleProp } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').AspectRatioComponent, import('@beatgig/synth-ui').BackgroundProps>}
 */
const StyledBackground = styled(AspectRatio)`
  ${setBackgroundColor()}
  background-clip: ${styleProp('clip')};  
  background-image: url(${styleProp('image')});
  background-origin: ${styleProp('origin')};
  background-position: ${styleProp('position')};
  background-repeat: ${styleProp('repeat')};
  background-size: ${styleProp('size')};
`

const Background = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').BackgroundProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledBackground {...props} className={className} ref={ref} synth={synth}>
      {children}
    </StyledBackground>
  ),
)

Background.propTypes = {
  ...AspectRatio.propTypes,
  /**
   * The elements you want to display within this background component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The value to be assigned to the `background-clip` CSS property.
   */
  clip: PropTypes.string,
  /**
   * The value to be assigned to the `background-size` CSS property.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `background-color` CSS property. The
   * value also be a synth global or color:background token name.
   */
  color: PropTypes.string,
  /**
   * The value to be assigned to the `background-image` CSS property.
   */
  image: PropTypes.string,
  /**
   * The value to be assigned to the `background-origin` CSS property.
   */
  origin: PropTypes.string,
  /**
   * The value to be assigned to the `background-repeat` CSS property.
   */
  repeat: PropTypes.string,
  /**
   * The value to be assigned to the `background-position` CSS property.
   */
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Background.defaultProps = {
  ...AspectRatio.defaultProps,
  children: null,
  className: '',
}

Background.displayName = 'Background'

export default withSynth(Background)
