import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../Button'
import Card from './Card'
import { Input } from '../Input'
import { FormRow } from '../FormRow'
import { Heading } from '../Heading'

storiesOf('Card', module).add('default', () => (
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
