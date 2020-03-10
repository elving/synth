import faker from 'faker'
import React, { Fragment, useRef } from 'react'
import styled from 'styled-components'

import { Button, Flex, Popup, usePopup } from '../src'

import ArtistVertical from './assets/images/artist-vertical.jpg'
import ArtistHorizontal from './assets/images/artist-horizontal.jpg'

const PopupWrapper = styled.div`
  height: 300px;
  position: relative;
  transform: translateZ(0);
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  width: 100%;
`

const CardWrapper = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '480px'};
  width: 100%;
`

const StyledPopup = styled(Popup)`
  padding: 15px;
  width: 320px;
`

const PopupWithHook = (props) => {
  const { isOpen, popupRef, props: popupProps, toggle, triggerRef } = usePopup(
    props,
  )

  const imgRef = useRef()

  return (
    <Fragment>
      <Button ref={triggerRef} onClick={toggle}>
        {props.triggerLabel}
      </Button>

      {isOpen ? (
        <StyledPopup
          {...props}
          {...popupProps}
          container={document.body}
          ref={popupRef}
        >
          Popup Content
        </StyledPopup>
      ) : null}
    </Fragment>
  )
}

const tagsUsernames = [
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
]

const tags = [
  {
    value: tagsUsernames[0],
    label: tagsUsernames[0],
  },
  {
    value: tagsUsernames[1],
    label: tagsUsernames[1],
  },
  {
    value: tagsUsernames[2],
    label: tagsUsernames[2],
  },
  {
    value: tagsUsernames[3],
    label: tagsUsernames[3],
  },
  {
    value: tagsUsernames[4],
    label: tagsUsernames[4],
  },
  {
    value: tagsUsernames[5],
    label: tagsUsernames[5],
  },
]

const CoverVerticalImage = () => (
  <div
    style={{
      backgroundImage: `url(${ArtistVertical})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  />
)

const CoverHorizontalImage = () => (
  <div
    style={{
      backgroundImage: `url(${ArtistHorizontal})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  />
)

const genres = [
  {
    id: 'b09993',
    name: 'Pop',
  },
  {
    id: 'pxzo2q',
    name: 'Hip Hop',
  },
  {
    id: '02lsms',
    name: 'Proggesive Rock',
  },
  {
    id: 'x2os5a',
    name: 'Melodic Metalcore',
  },
]

const artists = [
  {
    avatar: ArtistVertical,
    genres: [genres[0]],
    id: 'opa9mb',
    rating: 2,
    stageName: 'Artist Name 1',
  },
  {
    avatar: ArtistHorizontal,
    genres: [genres[2], genres[1]],
    id: '92s25o',
    rating: 3.45,
    stageName: 'Artist Name 2',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0], genres[3]],
    id: 'xzao0w',
    rating: 4.02,
    stageName: 'Artist Name 3',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0]],
    id: 'lpow2s',
    rating: 5,
    stageName: 'Artist Name 4',
  },
  {
    avatar: ArtistHorizontal,
    genres: [genres[2], genres[1]],
    id: '92m221',
    rating: 1.45,
    stageName: 'Artist Name 5',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0], genres[3]],
    id: 'akddx1',
    rating: 2.28,
    stageName: 'Artist Name 6',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0]],
    id: 'vbdse2',
    rating: 1.7,
    stageName: 'Artist Name 7',
  },
  {
    avatar: ArtistHorizontal,
    genres: [genres[2], genres[1]],
    id: '93o219',
    rating: 3.93,
    stageName: 'Artist Name 8',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0], genres[3]],
    id: '83s991',
    rating: 0.25,
    stageName: 'Artist Name 9',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0]],
    id: 'hg4ess',
    rating: 4.7,
    stageName: 'Artist Name 10',
  },
  {
    avatar: ArtistHorizontal,
    genres: [genres[2], genres[1]],
    id: '22ii88',
    rating: 1.3,
    stageName: 'Artist Name 11',
  },
  {
    avatar: ArtistVertical,
    genres: [genres[0], genres[3]],
    id: 'ju9low',
    rating: 0.5,
    stageName: 'Artist Name 12',
  },
]

export {
  artists,
  CardWrapper,
  CoverHorizontalImage,
  CoverVerticalImage,
  PopupWithHook,
  PopupWrapper,
  tags,
}
