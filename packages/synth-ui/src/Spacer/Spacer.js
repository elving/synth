import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'
import { setDisplay, setMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').SpacerProps>}
 */
const StyledSpacer = styled.div`
  ${setBaseStyles()}
  ${setDisplay()}
  ${setMargin()}
`

const Spacer = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SpacerProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <StyledSpacer {...props} className={className} synth={synth} ref={ref} />
  ),
)

Spacer.propTypes = {
  /**
   * A boolean flag to determine if the space will be applied to the bottom
   * of the spacer element.
   */
  bottom: PropTypes.bool,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A boolean flag to determine what the value of the `display` CSS property
   * will be, if `true`, then the `display` CSS property will be `inline-block`.
   */
  inline: PropTypes.bool,
  /**
   * A boolean flag to determine if the space will be applied to the left
   * of the spacer element.
   */
  left: PropTypes.bool,
  /**
   * A boolean flag to determine if the space will be applied to the right
   * of the spacer element.
   */
  right: PropTypes.bool,
  /**
   * A scale index from the `spacing` synth token.
   */
  scale: PropTypes.number,
  /**
   * A boolean flag to determine if the space will be applied to the top
   * of the spacer element.
   */
  top: PropTypes.bool,
}

Spacer.defaultProps = {
  bottom: false,
  className: '',
  inline: false,
  left: false,
  right: false,
  scale: 0,
  top: false,
}

Spacer.displayName = 'Spacer'

export default withSynth(Spacer)
