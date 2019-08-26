import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Button from '../src/Button'
import { SearchIcon } from '../../Icons'

storiesOf('Button', module)
  .addDecorator(centered)
  .add('default', () => <Button>Button</Button>)
  .add('outline', () => <Button outline>Outline Button</Button>)
  .add('primary', () => <Button primary>Primary Button</Button>)
  .add('primary + outline', () => (
    <Button primary outline>
      Primary Outline Button
    </Button>
  ))
  .add('disabled', () => <Button disabled>Disabled Button</Button>)
  .add('with icon left', () => (
    <Button icon={<SearchIcon />}>Search Button</Button>
  ))
  .add('with icon top', () => (
    <Button icon={<SearchIcon />} iconPosition="top">
      Search Button
    </Button>
  ))
  .add('with icon right', () => (
    <Button icon={<SearchIcon />} iconPosition="right">
      Search Button
    </Button>
  ))
  .add('with icon bottom', () => (
    <Button icon={<SearchIcon />} iconPosition="bottom">
      Search Button
    </Button>
  ))
  .add('icon only', () => <Button icon={<SearchIcon />} />)
