import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Checkbox from '../src/Checkbox'

storiesOf('Checkbox', module)
  .addDecorator(centered)
  .add('default', () => <Checkbox />)
  .add('with label', () => <Checkbox label="Lorem ipsum dolor sit amet" />)
