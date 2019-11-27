import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import { withForwardedRef } from '../utils'

const AdminIcon = ({ className = '', ref, ...props }) => (
  <Icon {...props} ref={ref} viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Icon>
)

AdminIcon.propTypes = {
  className: PropTypes.string,
}

export default withForwardedRef(AdminIcon)
