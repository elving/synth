import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { unit } from '@beatgig/synth-core'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius } from '@beatgig/synth-styled-components'

import { AspectRatio } from '../AspectRatio'
import { Flex } from '../Flex'
import { Rating } from '../Rating'
import { Text } from '../Typography'

import { styleProp } from '../utils'

const Avatar = styled.div`
  ${borderRadius()}
  background-image: url(${styleProp('src')});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`

const Artist = forwardRef(({ className = '', src, synth, ...props }, ref) => (
  <Flex column className={className} fullWidth ref={ref}>
    <AspectRatio ratio=".85" width="100%">
      <Avatar src={src} synth={synth} />
    </AspectRatio>
    <Text>Artist Name</Text>
    <div>Artist Genre</div>
    <Rating rating={3.35} />
  </Flex>
))

Artist.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * Url pointing to the artist's avatar.
   */
  src: PropTypes.string.isRequired,
}

Artist.defaultProps = {
  className: '',
}

Artist.displayName = 'Artist'

export default withSynth(Artist)
