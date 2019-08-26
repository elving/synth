import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import CheckIcon from '../src/CheckIcon'

storiesOf('Icon/CheckIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <CheckIcon />)
  .add('scale 1', () => <CheckIcon scale={1} />)
  .add('scale 2', () => <CheckIcon scale={2} />)
  .add('scale 3', () => <CheckIcon scale={3} />)
  .add('scale 4', () => <CheckIcon scale={4} />)
  .add('scale 5', () => <CheckIcon scale={5} />)
