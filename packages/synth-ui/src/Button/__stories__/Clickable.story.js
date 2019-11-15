import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Clickable from '../src/Clickable'
import { Flex } from '../../Flex'
import { SearchIcon } from '../../Icons'
import { Spacer } from '../../Spacer'

storiesOf('Button/Clickable', module)
  .addDecorator(centered)
  .add('default', () => <Clickable>Clickable</Clickable>)
  .add('with intent', () => (
    <Flex alignItems="center">
      <Clickable intent="none">None</Clickable>
      <Spacer right scale={4} />
      <Clickable intent="danger">Danger</Clickable>
      <Spacer right scale={4} />
      <Clickable intent="success">Success</Clickable>
      <Spacer right scale={4} />
      <Clickable intent="highlight">Highlight</Clickable>
    </Flex>
  ))
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
