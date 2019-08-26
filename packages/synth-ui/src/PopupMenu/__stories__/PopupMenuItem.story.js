import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import React, { Fragment } from 'react'

import PopupMenuItem from '../src/PopupMenuItem'

storiesOf('Popup/PopupMenu/Item', module)
  .addDecorator(centered)
  .add('default', () => (
    <Fragment>
      <PopupMenuItem>Item 1</PopupMenuItem>
      <PopupMenuItem>Item 2</PopupMenuItem>
      <PopupMenuItem>Item 3</PopupMenuItem>
    </Fragment>
  ))
