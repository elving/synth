import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import React, { Fragment } from 'react'

import PopupMenuDivider from '../src/PopupMenuDivider'
import { Text } from '../../Text'

storiesOf('Popup/PopupMenu/Divider', module)
  .addDecorator(centered)
  .add('default', () => (
    <Fragment>
      <Text>Divider 1</Text>
      <PopupMenuDivider />
      <PopupMenuDivider />
      <Text>Divider 2</Text>
      <PopupMenuDivider />
      <Text>Divider 3</Text>
      <br />
      <Text>Divider 4</Text>
      <PopupMenuDivider />
    </Fragment>
  ))
