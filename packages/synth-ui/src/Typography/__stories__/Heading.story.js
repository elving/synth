import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Heading from '../src/Heading'

storiesOf('Typography/Heading', module)
  .addDecorator(centered)
  .add('default', () => <Heading>Lorem ipsum dolor sit amet.</Heading>)
