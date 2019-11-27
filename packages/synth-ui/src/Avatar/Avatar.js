import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  boxShadow,
} from '@beatgig/synth-styled-components'

import { setBaseStyles, withForwardedRef } from '../utils'
import { getScale } from './utils'

const StyledAvatar = styled.img`
  ${setBaseStyles()}
  ${backgroundColor('avatar')}
  ${boxShadow('avatar')}
  ${borderRadius('rounded')}
  width: ${getScale()};
  height: ${getScale()};
`

const SynthAvatar = withSynth(StyledAvatar)

const Avatar = ({ className = '', ref, scale = 0, ...props }) => (
  <SynthAvatar {...props} className={className} ref={ref} scale={scale} />
)

Avatar.propTypes = {
  className: PropTypes.string,
  scale: PropTypes.number,
  src: PropTypes.string.isRequired,
}

export default withForwardedRef(Avatar)
