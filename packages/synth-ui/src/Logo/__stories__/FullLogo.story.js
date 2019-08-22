import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import FullLogo from '../src/FullLogo'

storiesOf('Logo/FullLogo', module)
  .addDecorator(centered)
  .add('default', () => <FullLogo />)
  .add('dark', () => <FullLogo dark />)
