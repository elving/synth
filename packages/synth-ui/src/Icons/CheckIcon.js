import React, { forwardRef } from 'react'

import { Icon } from '../Icon'

const CheckIcon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (props, ref) => (
    <Icon {...props} fill="currentColor" ref={ref} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </Icon>
  ),
)

CheckIcon.propTypes = Icon.propTypes
CheckIcon.defaultProps = Icon.defaultProps
CheckIcon.displayName = 'CheckIcon'

export default CheckIcon
