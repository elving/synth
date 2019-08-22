import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Button from '../src/Button'

storiesOf('Button/Default', module)
  .addDecorator(centered)
  .add('default', () => <Button>Button</Button>)
  .add('secondary', () => <Button secondary>Secondary Button</Button>)
  .add('disabled', () => <Button disabled>Disabled Button</Button>)
