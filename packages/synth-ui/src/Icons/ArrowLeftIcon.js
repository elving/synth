import React, { forwardRef } from 'react'

import { Icon } from '../Icon'

const ArrowLeftIcon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (props, ref) => (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  ),
)

ArrowLeftIcon.propTypes = Icon.propTypes
ArrowLeftIcon.defaultProps = Icon.defaultProps
ArrowLeftIcon.displayName = 'ArrowLeftIcon'

export default ArrowLeftIcon
