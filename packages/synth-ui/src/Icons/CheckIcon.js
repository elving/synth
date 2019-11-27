import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import { withForwardedRef } from '../utils'

const CheckIcon = ({ className = '', ref, ...props }) => (
  <Icon {...props} className={className} ref={ref} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </Icon>
)

CheckIcon.propTypes = {
  className: PropTypes.string,
}

export default withForwardedRef(CheckIcon)
