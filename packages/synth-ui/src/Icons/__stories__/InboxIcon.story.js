import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import InboxIcon from '../src/InboxIcon'

storiesOf('Icon/InboxIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <InboxIcon />)
  .add('scale 1', () => <InboxIcon scale={1} />)
  .add('scale 2', () => <InboxIcon scale={2} />)
  .add('scale 3', () => <InboxIcon scale={3} />)
  .add('scale 4', () => <InboxIcon scale={4} />)
  .add('scale 5', () => <InboxIcon scale={5} />)
