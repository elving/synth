import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import { withForwardedRef } from '../utils'

const ChevronDownIcon = ({ className = '', ref, ...props }) => (
  <Icon {...props} className={className} ref={ref} viewBox="0 0 24 24">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Icon>
)

ChevronDownIcon.propTypes = {
  className: PropTypes.string,
}

export default withForwardedRef(ChevronDownIcon)
