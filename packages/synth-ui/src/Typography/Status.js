import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  color,
  fontSize,
  fontWeight,
  textTransform,
} from '@beatgig/synth-styled-components'

import Text from './Text'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').TextComponent>}
 */
const StyledStatus = styled(Text)`
  ${color('status')}
  ${fontSize('status')}
  ${fontWeight('status')}
  ${textTransform('status')}
`

const Status = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').StatusProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledStatus {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledStatus>
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

export default withSynth(Status)
