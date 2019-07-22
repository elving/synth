import React from 'react'
import { storiesOf } from '@storybook/react'

import SecondaryButton from './SecondaryButton'

storiesOf('SecondaryButton', module)
  .add('default', () => <SecondaryButton>Secondary Button</SecondaryButton>)
  .add('disabled', () => (
    <SecondaryButton disabled>Disabled Secondary Button</SecondaryButton>
  ))
