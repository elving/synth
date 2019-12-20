import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { forwardRef } from 'react'
import { borderRadius, boxShadow } from '@beatgig/synth-styled-components'
import { Text, withSynth } from '@beatgig/synth-react'

import { Background } from '../Background'
import { Flex } from '../Flex'
import { Heading } from '../Typography'
import { Rating } from '../Rating'
import { Spacer } from '../Spacer'

/**
 * @type {import('@beatgig/synth-ui').BackgroundComponent}
 */
const StyledBackground = styled(Background)`
  ${borderRadius()}
  ${boxShadow('subtle')}
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const Content = styled(Flex)`
  text-align: center;
`

const ArtistCard = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ArtistCardProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', artist, synth }, ref) => (
    <Flex column className={className} fullWidth ref={ref}>
      <StyledBackground
        image={artist.avatar}
        position="center center"
        repeat="no-repeat"
        size="cover"
        synth={synth}
        width="100%"
      />
      <Spacer scale={1} bottom />
      <Content center column fullWidth>
        <Heading level="h5" weight="@fontWeights" withoutMargin>
          {artist.stageName}
        </Heading>
        <Spacer bottom />
        <Text color="meta">
          {artist.genres.map(({ name }) => name).join(', ')}
        </Text>
        <Spacer bottom />
        <Rating scale={1} rating={artist.rating} />
      </Content>
    </Flex>
  ),
)

ArtistCard.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The artist object holding their information to be displayed.
   */
  artist: PropTypes.exact({
    avatar: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    id: PropTypes.string,
    rating: PropTypes.number,
    stageName: PropTypes.string,
  }),
}

ArtistCard.defaultProps = {
  className: '',
}

ArtistCard.displayName = 'ArtistCard'

export default withSynth(ArtistCard)
