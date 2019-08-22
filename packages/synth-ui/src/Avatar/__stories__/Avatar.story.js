import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Avatar from '../src/Avatar'
import { Flex } from '../../Flex'
import { Spacer } from '../../Spacer'

storiesOf('Avatar', module)
  .addDecorator(centered)
  .add('default', () => (
    <Flex alignItems="baseline">
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
      <Spacer left scale={2} />
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={1} />
      <Spacer left scale={2} />
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={2} />
      <Spacer left scale={2} />
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={3} />
      <Spacer left scale={2} />
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={4} />
      <Spacer left scale={2} />
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={5} />
    </Flex>
  ))
