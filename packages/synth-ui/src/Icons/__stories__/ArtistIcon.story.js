import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import ArtistIcon from '../src/ArtistIcon'

storiesOf('Icon/ArtistIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <ArtistIcon />)
  .add('scale 1', () => <ArtistIcon scale={1} />)
  .add('scale 2', () => <ArtistIcon scale={2} />)
  .add('scale 3', () => <ArtistIcon scale={3} />)
  .add('scale 4', () => <ArtistIcon scale={4} />)
  .add('scale 5', () => <ArtistIcon scale={5} />)
