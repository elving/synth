import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import FormField from '../src/FormField'
import FormRow from '../src/FormRow'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { Input } from '../../Input'

storiesOf('Form/Field', module)
  .addDecorator(centered)
  .add('default', () => (
    <div style={{ width: 320 }}>
      <Card>
        <FormField label="Email" fullWidth>
          <Input placeholder="email@example.com" />
        </FormField>
        <FormRow>
          <Button>Submit</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('inline', () => (
    <div style={{ width: 320 }}>
      <Card>
        <FormField label="Email" inline>
          <Input placeholder="email@example.com" />
        </FormField>
        <FormRow>
          <Button>Submit</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('with hint', () => (
    <div style={{ width: 320 }}>
      <Card>
        <FormField
          fullWidth
          hint="Use your email address; we'll use your email address to send you approximately 161.3 emails per day."
          label="Email"
        >
          <Input placeholder="email@example.com" />
        </FormField>
        <FormRow>
          <Button>Submit</Button>
        </FormRow>
      </Card>
    </div>
  ))
  .add('with error message', () => (
    <div style={{ width: 320 }}>
      <Card>
        <FormField
          error="There was an error, please try again."
          fullWidth
          hint="We'll use your email to identify you."
          label="Email"
        >
          <Input placeholder="email@example.com" />
        </FormField>
        <FormRow>
          <Button>Submit</Button>
        </FormRow>
      </Card>
    </div>
  ))
