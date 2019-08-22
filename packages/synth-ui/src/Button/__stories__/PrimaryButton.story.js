import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import PrimaryButton from '../src/PrimaryButton'

storiesOf('Button/Primary', module)
  .addDecorator(centered)
  .add('default', () => <PrimaryButton>PrimaryButton</PrimaryButton>)
  .add('secondary', () => (
    <PrimaryButton secondary>Secondary PrimaryButton</PrimaryButton>
  ))
  .add('disabled', () => (
    <PrimaryButton disabled>Disabled PrimaryButton</PrimaryButton>
  ))
