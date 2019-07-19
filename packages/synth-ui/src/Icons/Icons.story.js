import React from 'react'
import { storiesOf } from '@storybook/react'

import ArtistIcon from './ArtistIcon'
import InboxIcon from './InboxIcon'
import LogoutIcon from './LogoutIcon'

storiesOf('Icons', module)
  .add('ArtistIcon', () => <ArtistIcon size={24} />)
  .add('InboxIcon', () => <InboxIcon size={24} />)
  .add('LogoutIcon', () => <LogoutIcon size={24} />)
