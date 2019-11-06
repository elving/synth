import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import GlobalStyles from '../src/GlobalStyles'
import { Text } from '../../Typography'

storiesOf('GlobalStyles', module)
  .addDecorator(centered)
  .add('default', () => (
    <div>
      <GlobalStyles />
      <p>Hello</p>
      <Text>Hola</Text>
    </div>
  ))
