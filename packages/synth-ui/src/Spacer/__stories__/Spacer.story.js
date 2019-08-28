import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import { Text } from '../../Typography'
import Spacer from '../src/Spacer'

storiesOf('Spacer', module)
  .addDecorator(centered)
  .add('Bottom', () => (
    <div style={{ width: '100vw' }}>
      <Spacer bottom />
      <Text>0</Text>
      <Spacer bottom scale={1} />
      <Text>1</Text>
      <Spacer bottom scale={2} />
      <Text>2</Text>
      <Spacer bottom scale={3} />
      <Text>3</Text>
      <Spacer bottom scale={4} />
      <Text>4</Text>
      <Spacer bottom scale={5} />
      <Text>5</Text>
    </div>
  ))
  .add('Top', () => (
    <div style={{ width: '100vw' }}>
      <Text>0</Text>
      <Spacer top />
      <Text>1</Text>
      <Spacer top scale={1} />
      <Text>2</Text>
      <Spacer top scale={2} />
      <Text>3</Text>
      <Spacer top scale={3} />
      <Text>4</Text>
      <Spacer top scale={4} />
      <Text>5</Text>
      <Spacer top scale={5} />
      <Text>6</Text>
    </div>
  ))
  .add('Left', () => (
    <div style={{ width: '100vw' }}>
      <Spacer left inline />
      <Text>0</Text>
      <Spacer left inline scale={1} />
      <Text>1</Text>
      <Spacer left inline scale={2} />
      <Text>2</Text>
      <Spacer left inline scale={3} />
      <Text>3</Text>
      <Spacer left inline scale={4} />
      <Text>4</Text>
      <Spacer left inline scale={5} />
      <Text>5</Text>
    </div>
  ))
  .add('Right', () => (
    <div style={{ width: '100vw' }}>
      <Text>0</Text>
      <Spacer right inline />
      <Text>1</Text>
      <Spacer right inline scale={1} />
      <Text>2</Text>
      <Spacer right inline scale={2} />
      <Text>3</Text>
      <Spacer right inline scale={3} />
      <Text>4</Text>
      <Spacer right inline scale={4} />
      <Text>5</Text>
      <Spacer right inline scale={5} />
      <Text>6</Text>
    </div>
  ))
