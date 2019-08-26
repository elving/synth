import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import AdminIcon from '../src/AdminIcon'

storiesOf('Icon/AdminIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <AdminIcon />)
  .add('scale 1', () => <AdminIcon scale={1} />)
  .add('scale 2', () => <AdminIcon scale={2} />)
  .add('scale 3', () => <AdminIcon scale={3} />)
  .add('scale 4', () => <AdminIcon scale={4} />)
  .add('scale 5', () => <AdminIcon scale={5} />)
