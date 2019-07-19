import React from 'react'
import { storiesOf } from '@storybook/react'

import Flex from './Flex'

storiesOf('Flex', module)
  .add('default', () => (
    <Flex style={{ background: 'salmon', height: 150, width: 300 }}>FLEX</Flex>
  ))
  .add('center', () => (
    <Flex center style={{ background: 'salmon', height: 150, width: 300 }}>
      FLEX
    </Flex>
  ))
