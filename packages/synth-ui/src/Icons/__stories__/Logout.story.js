import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import LogoutIcon from '../src/LogoutIcon'

storiesOf('Icon/LogoutIcon', module)
  .addDecorator(centered)
  .add('scale 0', () => <LogoutIcon />)
  .add('scale 1', () => <LogoutIcon scale={1} />)
  .add('scale 2', () => <LogoutIcon scale={2} />)
  .add('scale 3', () => <LogoutIcon scale={3} />)
  .add('scale 4', () => <LogoutIcon scale={4} />)
  .add('scale 5', () => <LogoutIcon scale={5} />)
