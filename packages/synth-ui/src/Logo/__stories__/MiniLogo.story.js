import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import MiniLogo from '../src/MiniLogo'

storiesOf('Logo/MiniLogo', module)
  .addDecorator(centered)
  .add('default', () => <MiniLogo />)
  .add('dark', () => <MiniLogo dark />)
