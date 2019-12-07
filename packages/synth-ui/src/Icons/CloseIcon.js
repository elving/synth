import React, { forwardRef } from 'react'

import { Icon } from '../Icon'

const CloseIcon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (props, ref) => (
    <Icon {...props} fill="currentColor" ref={ref} viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  ),
)

CloseIcon.propTypes = Icon.propTypes
CloseIcon.defaultProps = Icon.defaultProps
CloseIcon.displayName = 'CloseIcon'

export default CloseIcon
