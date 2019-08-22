import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Flex from './Flex'

storiesOf('Flex', module)
  .addDecorator(centered)
  .add('default', () => (
    <Flex style={{ background: 'salmon', height: 150, width: 300 }}>FLEX</Flex>
  ))
  .add('center', () => (
    <Flex center style={{ background: 'salmon', height: 150, width: 300 }}>
      FLEX
    </Flex>
  ))
