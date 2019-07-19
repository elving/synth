import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './Header'
import { Text } from '../Text'
import { Input } from '../Input'

storiesOf('Header', module).add('default', () => (
  <div style={{ width: '100vw' }}>
    <Header>
      <Text>The Header</Text>
      <Input />
    </Header>
  </div>
))
