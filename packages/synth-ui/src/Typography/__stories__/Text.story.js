import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Text from '../src/Text'

storiesOf('Typography/Text', module)
  .addDecorator(centered)
  .add('default', () => (
    <Text>
      Lorem ipsum dolor sit amet, duo nullam denique ut, nec at suas illud
      nostro.
    </Text>
  ))
