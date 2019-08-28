import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Card from '../src/Card'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { FormRow } from '../../Form'
import { Heading } from '../../Typography'

storiesOf('Card', module)
  .addDecorator(centered)
  .add('default', () => (
    <div style={{ width: 480 }}>
      <Card>
        <Heading>This is a card component</Heading>
        <FormRow>
          <Input />
        </FormRow>
        <FormRow>
          <Button>Button</Button>
        </FormRow>
      </Card>
    </div>
  ))
