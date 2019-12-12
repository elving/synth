import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBoxProperties } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').BoxProps>}
 */
const StyledBox = styled.div`
  ${setBoxProperties()}
`

const Box = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').BoxProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledBox {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledBox>
  ),
)

Box.propTypes = {
  /**
   * The elements you want to display within this box component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The value to be assigned to the `height` CSS property.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `margin` CSS property.
   */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `max-height` CSS property.
   */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `max-width` CSS property.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `min-height` CSS property.
   */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `min-width` CSS property.
   */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `padding` CSS property.
   */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `width` CSS property.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Box.defaultProps = {
  children: null,
  className: '',
}

Box.displayName = 'Box'

export default withSynth(Box)
