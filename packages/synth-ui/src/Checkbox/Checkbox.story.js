import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from './Checkbox'

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('with label', () => <Checkbox label="Lorem ipsum dolor sit amet" />)
