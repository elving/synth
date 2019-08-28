import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import FormRow from '../src/FormRow'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Input } from '../../Input'

storiesOf('Form/Row', module)
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
  .add('fullWidth', () => (
    <div style={{ width: 480 }}>
      <Card>
        <FormRow fullWidth>
          <Input />
        </FormRow>
        <FormRow fullWidth>
          <Button>Button</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('inline', () => (
    <div style={{ width: 480 }}>
      <Card>
        <FormRow inline>
          <Input />
          <Button>Button</Button>
        </FormRow>
        <FormRow inline>
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
