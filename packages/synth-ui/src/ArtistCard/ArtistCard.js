import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { forwardRef } from 'react'
import { borderRadius, boxShadow } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Background } from '../Background'
import { Flex } from '../Flex'
import { Heading, Text } from '../Typography'
import { Rating } from '../Rating'
import { Spacer } from '../Spacer'

/**
 * @type {import('@beatgig/synth-ui').BackgroundComponent}
 */
const StyledBackground = styled(Background)`
  ${borderRadius()}
  ${boxShadow('subtle')}
  width: 100%;
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const Content = styled(Flex)`
  text-align: center;
`

/**
 * @type {import('@beatgig/synth-ui').HeadingComponent}
 */
const StageName = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

/**
 * @type {import('@beatgig/synth-ui').TextComponent}
 */
const Genres = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const ArtistCard = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ArtistCardProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', artist, synth }, ref) => {
    const genres = artist.genres.map(({ name }) => name).join(', ')

    return (
      <Flex column className={className} fullWidth ref={ref}>
        <StyledBackground
          image={artist.avatar}
          position="center center"
          repeat="no-repeat"
          size="cover"
          synth={synth}
        />
        <Spacer scale={2} bottom />
        <Content center column fullWidth>
          <StageName level="h6" fontWeight="@fontWeights.2" withoutMargin>
            {artist.stageName}
          </StageName>
          <Spacer bottom />
          <Genres title={genres}>{genres}</Genres>
          <Spacer bottom />
          <Rating scale={2} rating={artist.rating} />
        </Content>
      </Flex>
    )
  },
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
