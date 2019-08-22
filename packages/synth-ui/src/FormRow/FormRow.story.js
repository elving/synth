import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import FormRow from './FormRow'
import { Button } from '../Button'
import { Card } from '../Card'
import { Input } from '../Input'

storiesOf('FormRow', module)
  .addDecorator(centered)
  .add('default', () => (
    <div style={{ width: 480 }}>
      <Card>
        <FormRow>
          <Input />
        </FormRow>
        <FormRow>
          <Button>Button</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('inline', () => (
    <div style={{ width: 480 }}>
      <Card>
        <FormRow fullWidth inline>
          <Input />
          <Button>Button</Button>
        </FormRow>
        <FormRow fullWidth inline>
          <Button>Button A</Button>
          <Button>Button B</Button>
          <Button>Button C</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('centered', () => (
    <div style={{ width: 480 }}>
      <Card>
        <FormRow centered>Click the button bellow</FormRow>
        <FormRow centered>
          <Button>Button A</Button>
        </FormRow>
      </Card>
    </div>
  ))
