import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Clickable from '../src/Clickable'
import { SearchIcon } from '../../Icons'

storiesOf('Button/Clickable', module)
  .addDecorator(centered)
  .add('default', () => <Clickable>Clickable</Clickable>)
  .add('disabled', () => <Clickable disabled>Disabled Clickable</Clickable>)
  .add('with icon left', () => (
    <Clickable icon={<SearchIcon />}>Search Clickable</Clickable>
  ))
  .add('with icon top', () => (
    <Clickable icon={<SearchIcon />} iconPosition="top">
      Search Clickable
    </Clickable>
  ))
  .add('with icon right', () => (
    <Clickable icon={<SearchIcon />} iconPosition="right">
      Search Clickable
    </Clickable>
  ))
  .add('with icon bottom', () => (
    <Clickable icon={<SearchIcon />} iconPosition="bottom">
      Search Clickable
    </Clickable>
  ))
  .add('icon only', () => <Clickable icon={<SearchIcon />} />)
