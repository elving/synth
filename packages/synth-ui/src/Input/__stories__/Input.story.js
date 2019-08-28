import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Input from '../src/Input'

storiesOf('Input/Default', module)
  .addDecorator(centered)
  .add('default', () => <Input />)
  .add('with error', () => <Input hasError />)
