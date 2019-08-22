import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import ArtistIcon from './ArtistIcon'
import InboxIcon from './InboxIcon'
import LogoutIcon from './LogoutIcon'

storiesOf('Icons', module)
  .addDecorator(centered)
  .add('ArtistIcon', () => <ArtistIcon size={24} />)
  .add('InboxIcon', () => <InboxIcon size={24} />)
  .add('LogoutIcon', () => <LogoutIcon size={24} />)
