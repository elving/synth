import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import ChevronDownIcon from '../src/ChevronDownIcon'

storiesOf('Icon/ChevronDownIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <ChevronDownIcon />)
  .add('scale 1', () => <ChevronDownIcon scale={1} />)
  .add('scale 2', () => <ChevronDownIcon scale={2} />)
  .add('scale 3', () => <ChevronDownIcon scale={3} />)
  .add('scale 4', () => <ChevronDownIcon scale={4} />)
  .add('scale 5', () => <ChevronDownIcon scale={5} />)
