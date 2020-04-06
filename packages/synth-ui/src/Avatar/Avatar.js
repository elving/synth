import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  boxShadow,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'
import { getScale } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'img', import('@beatgig/synth-ui').AvatarProps>}
 */
const StyledAvatar = styled.img`
  ${setBaseStyles()}
  ${backgroundColor('avatar')}
  ${boxShadow('avatar')}
  ${borderRadius('rounded')}
  width: ${getScale()};
  height: ${getScale()};
`

const Avatar = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').AvatarProps} props
   */
  ({ className = '', scale = 1, ...props }, ref) => (
    <StyledAvatar {...props} className={className} ref={ref} scale={scale} />
  ),
)

Avatar.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A scale index from the `avatars` synth token.
   */
  scale: PropTypes.number,
  /**
   * Url pointing to the user's avatar.
   */
  src: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
  className: '',
  scale: 1,
}

Avatar.displayName = 'Avatar'

export default withSynth(Avatar)
