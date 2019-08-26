import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import SearchIcon from '../src/SearchIcon'

storiesOf('Icon/SearchIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <SearchIcon />)
  .add('scale 1', () => <SearchIcon scale={1} />)
  .add('scale 2', () => <SearchIcon scale={2} />)
  .add('scale 3', () => <SearchIcon scale={3} />)
  .add('scale 4', () => <SearchIcon scale={4} />)
  .add('scale 5', () => <SearchIcon scale={5} />)
