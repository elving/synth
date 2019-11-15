import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Button from '../src/Button'
import { Flex } from '../../Flex'
import { SearchIcon } from '../../Icons'
import { Spacer } from '../../Spacer'

storiesOf('Button', module)
  .addDecorator(centered)
  .add('default', () => <Button>Button</Button>)
  .add('with intent', () => (
    <Flex alignItems="center">
      <Button intent="none">None</Button>
      <Spacer right scale={4} />
      <Button intent="danger">Danger</Button>
      <Spacer right scale={4} />
      <Button intent="success">Success</Button>
      <Spacer right scale={4} />
      <Button intent="highlight">Highlight</Button>
    </Flex>
  ))
  .add('outline', () => (
    <Flex alignItems="center">
      <Button intent="none" outline>
        None
      </Button>
      <Spacer right scale={4} />
      <Button intent="danger" outline>
        Danger
      </Button>
      <Spacer right scale={4} />
      <Button intent="success" outline>
        Success
      </Button>
      <Spacer right scale={4} />
      <Button intent="highlight" outline>
        Highlight
      </Button>
    </Flex>
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
