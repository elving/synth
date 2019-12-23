import React, { forwardRef } from 'react'

import { Icon } from '../Icon'

const ArrowRightIcon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (props, ref) => (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </Icon>
  ),
)

ArrowRightIcon.propTypes = Icon.propTypes
ArrowRightIcon.defaultProps = Icon.defaultProps
ArrowRightIcon.displayName = 'ArrowRightIcon'

export default ArrowRightIcon
