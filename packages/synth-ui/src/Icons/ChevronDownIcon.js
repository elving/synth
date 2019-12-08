import React, { forwardRef } from 'react'

import { Icon } from '../Icon'

const ChevronDownIcon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (props, ref) => (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  ),
)

ChevronDownIcon.propTypes = Icon.propTypes
ChevronDownIcon.defaultProps = Icon.defaultProps
ChevronDownIcon.displayName = 'ChevronDownIcon'

export default ChevronDownIcon
